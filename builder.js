//WordBuilder parameters:
// - NP or VP or QP or CP
// - Chosen verb/noun
// - default per/num/det
// - 

//Methods:
// - Verb phrase controller
//   - Indicative [!!PRIORITY!!]
//   - Interrogative
//   - Optative
// - Noun phrase controller [!!PRIORITY!!]
// - Call foma apply down
// - Build English translation
// - Color segmentation


class wordBuilder {
    constructor(type, base, defaultPerson, defaultNumber, defaultDeterminative){
        this.type = type; // NP, VP, QP, or CP
        this.base = base; // Chosen verb/noun
        this.defaultPerson = defaultPerson;
        this.defaultNumber = defaultNumber;
        this.defaultDeterminative = defaultDeterminative;
    }

    // Noun phrase controller
    nounPhrase(nounCase){
        return new nounPhrase(this.base, this.defaultPerson, this.defaultNumber, this.defaultDeterminative, nounCase);
    }

    // Call foma apply down
    applyFomaDown(){
        // TODO: Interface with foma tool
    }

    // Build English translation
    buildTranslation(){
        // TODO: Generate English translation
    }

    // Color segmentation
    colorSegmentation(){
        // TODO: Apply color coding to morphological segments
    }
}

class verbPhrase {
    constructor(vpType, vBase, defaultPerson, defaultNumber){
        this.vpType = vpType;
        this.vBase = vBase;
        this.defaultPerson = defaultPerson;
        this.defaultNumber = defaultNumber;
    }

    phraseType(){
        // TODO: Determine and return phrase type
    }

        // Verb phrase controller methods
    indicative(){
        // TODO: Handle indicative mood
    }

    interrogative(){
        // TODO: Handle interrogative mood
    }

    optative(){
        // TODO: Handle optative mood
    }
}

class nounPhrase {
    constructor(nBase, defaultPerson, defaultNumber, defaultDeterminative, nounCase){
        this.nBase = nBase;
        this.defaultPerson = defaultPerson;
        this.defaultNumber = defaultNumber;
        this.defaultDeterminative = defaultDeterminative;
        this.nounCase = nounCase;
    }
}
