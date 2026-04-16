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

//Procedure:
// 1. User selects phrase type (NP, VP, QP, CP)
// 2. Dropdown menus appear and update to show relevant options based on phrase type
// 3. User selects options from dropdowns
// 4. wordBuilder class is instantiated with selected parameters
// 5. createPhrase method generates the phrase based on type and parameters
// 6. Output the generated phrase and its English translation to the user

function verbDropdowns(){
    const vBaseSelect = document.getElementById('vBaseSelect');
    vBaseSelect.innerHTML = '';
    for (const [key, value] of Object.entries(vBases)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        vBaseSelect.appendChild(option);
    }
}

function nounDropdowns(){
    const nBaseSelect = document.getElementById('nBaseSelect');
    nBaseSelect.innerHTML = '';
    for (const [key, value] of Object.entries(nBases)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        nBaseSelect.appendChild(option);
    }
}

function phraseChoice(){
    const phraseType = document.querySelector('input[name="phraseType"]:checked').value;
    if (phraseType === 'NP') {
        document.getElementById('verbDropdowns').style.display = 'none';
        document.getElementById('nounDropdowns').style.display = 'block';
        nounDropdowns(); // Populate noun dropdowns with appropriate options
    } else {
        document.getElementById('verbDropdowns').style.display = 'block';
        document.getElementById('nounDropdowns').style.display = 'none';
        verbDropdowns(); // Populate verb dropdowns with appropriate options
    }



    const base = document.getElementById(phraseType === 'NP' ? 'nBaseSelect' : 'vBaseSelect').value;
    const perNum = document.getElementById(phraseType === 'NP' ? 'nNumSelect' : 'vPerNumSelect').value;
    const det = phraseType === 'NP' ? document.getElementById('nDetSelect').value : null;
    const nCase = phraseType === 'NP' ? document.getElementById('nCaseSelect').value : null;

    const builder = new wordBuilder(phraseType, base, perNum, det, nCase);
    const phrase = builder.createPhrase();
    console.log(phrase);
}

class wordBuilder {
    constructor(type, base, person = "I", number = "one", determinative = "the", nCase = "absolutive"){
        this.type = type; // NP, VP, QP, or CP
        this.base = base; // Chosen verb/noun
        this.person = person;
        this.number = number;
        this.determinative = determinative;
        this.nCase = nCase;
    }


    // Call foma apply down
    applyFomaDown(){
        // TODO: Interface with foma tool
    }

    // Build English translation
    buildTranslation(){
        return "English translation placeholder";
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

// Add event listeners to radio buttons
document.querySelectorAll('input[name="phraseType"]').forEach(radio => {
    radio.addEventListener('change', phraseChoice);
});

function testWordBuilder() {
    phraseChoice();
}

testWordBuilder();