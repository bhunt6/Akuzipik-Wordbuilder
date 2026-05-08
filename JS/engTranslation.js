class engTranslation {
    constructor(obj, phraseType) { //engPerNum, engDet, engCase, engBase
        this.obj = obj;
        this.engPerNum = obj.engPerNum;
        this.engDet = obj.engDet;
        this.engCase = obj.engCase;
        this.engBase = obj.engBase;
        this.phraseType = phraseType;
        this.questionVForm = this.verbForm();
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
        if (this.phraseType === 'VP') {
            if (this.engPerNum === 'he/she/it') {
                if (this.engBase.endsWith('s') || this.engBase.endsWith('x') || this.engBase.endsWith('z') || this.engBase.endsWith('ch') || this.engBase.endsWith('sh')) {
                    return this.engBase + 'es';
                } else {
                    return this.engBase + 's';
                }
            } else {
                return this.engBase;
            }
        } else if (this.phraseType === 'QP') {
            if(this.engBase.endsWith('e')) {
                return this.engBase.slice(0, -1) + 'ing';
            }
            return this.engBase + "ing";
        } else {
            return this.engBase;
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
            return `(${this.engPerNum}) ${this.engBase}!`;
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