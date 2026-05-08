class engTranslation {
    constructor(obj, phraseType) { //engPerNum, engDet, engCase, engBase
        this.obj = obj;
        this.engPerNum = obj.engPerNum;
        this.engDet = obj.engDet;
        this.engCase = obj.engCase;
        this.engBase = obj.engBase.split(" ");
        this.phraseType = phraseType;
        this.vForm = this.verbForm();
        this.auxForm = this.aux();
        this.pluralForm = this.pluralize();
        this.fullEngPhrase = this.constructPhrase();
    }

    pluralize() {
        if (this.phraseType === 'NP' && (this.engPerNum === 'two' || this.engPerNum === 'three or more')) {
            return nPlurals[this.engBase] || this.engBase;
        }
        return this.engBase;
    }

    verbForm() {
        let base = this.engBase[0]; // Assuming the verb is the first word in engBase
        let tempEngBase = this.engBase // The rest of the words in engBase, if any
        tempEngBase.splice(0,1); // Remove the verb from tempEngBase
        console.log("base:", base);
        console.log("tempbase:", tempEngBase);
        if (this.phraseType === 'VP') {
            if (this.engPerNum === 'he/she/it') {
                if (base.endsWith('s') || base.endsWith('x') || base.endsWith('z') || base.endsWith('ch') || base.endsWith('sh')) {
                    return base + 'es ' + tempEngBase.join(' ');
                } else {
                    return base + 's ' + tempEngBase.join(' ');
                }
            } else {
                return base + " " + tempEngBase.join(' ');
            }
        } else if (this.phraseType === 'QP') {
            if(base.endsWith('e') && !base.endsWith('ee')) {
                return base.slice(0, -1) + 'ing ' + tempEngBase.join(' ');
            }
            return base + 'ing ' + tempEngBase.join(' ');
        } else {
            return base + " " + tempEngBase.join(' ');
        }
    }
    
    aux() {
        if (this.phraseType === 'QP' || this.phraseType === 'VP') {
            if (this.engPerNum === 'he/she/it') {
                return 'is';
            } else if (this.engPerNum === 'I') {
                return 'am';
            } else {
            return 'are';
            }
        }
    }

    constructPhrase() {
        if (this.phraseType === 'NP') {
            return `${this.engCase} ${this.engDet} ${this.engPerNum} ${this.pluralForm}`;
        } else if (this.phraseType === 'VP') {
            return `${this.engPerNum} ${this.vForm}`;
        } else if (this.phraseType === 'QP') {
            return `${this.auxForm.split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ')} ${this.engPerNum} ${this.vForm}?`;
        } else if (this.phraseType === 'CP') {
            return `(${this.engPerNum}) ${this.vForm}!`;
        }
    }
}

//English Outputs for each Phrase Type
//Noun Phrase
//pluralize nouns if number is du or pl

//Verb Phrase
//use base form of verb for all persons and numbers except 3rd person singular, which adds -s or -es

//Question Phrase
//use auxiliary verb "are" for all persons and numbers except 3rd person singular, which uses "is"
//prepend aux to pronoun

//Command Phrase
//Put pronoun in parentheses and use base form of verb 