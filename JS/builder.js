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
    let vBaseSelect = document.getElementById('vBaseSelect');
    vBaseSelect.innerHTML = '';
    for (let [key, value] of Object.entries(vBases)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        vBaseSelect.appendChild(option);
    }

    let vPerNumSelect = document.getElementById('vPerNumSelect');
    vPerNumSelect.innerHTML = '';
    for (let [key, value] of Object.entries(vPerNumOptions)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        vPerNumSelect.appendChild(option);
    }
}

function nounDropdowns(){
    let nBaseSelect = document.getElementById('nBaseSelect');
    nBaseSelect.innerHTML = '';
    for (let [key, value] of Object.entries(nBases)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        nBaseSelect.appendChild(option);
    }

    let nCaseSelect = document.getElementById('nCaseSelect');
    nCaseSelect.innerHTML = '';
    for (let [key, value] of Object.entries(nCaseOptions)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        nCaseSelect.appendChild(option);
    }

    let nDetSelect = document.getElementById('nDetSelect');
    nDetSelect.innerHTML = '';
    for (let [key, value] of Object.entries(detOptions)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        nDetSelect.appendChild(option);
    }

    let nNumSelect = document.getElementById('nNumSelect');
    nNumSelect.innerHTML = '';
    for (let [key, value] of Object.entries(nNumOptions)) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        nNumSelect.appendChild(option);
    }
}

function phraseChoice(){
    const phraseType = document.querySelector('input[name="phraseType"]:checked').value;
    let outputDiv = document.getElementById('output');
    outputDiv.textContent = ''; // Clear previous output
    let buildButton = document.getElementById('buildButton');
    buildButton.style.display = 'block'; // Show build button when a phrase type is selected
    if (phraseType === 'NP') {
        document.getElementById('verbDropdowns').style.display = 'none';
        document.getElementById('nounDropdowns').style.display = 'block';
        nounDropdowns(); // Populate noun dropdowns with appropriate options
    } else {
        document.getElementById('verbDropdowns').style.display = 'block';
        document.getElementById('nounDropdowns').style.display = 'none';
        verbDropdowns(); // Populate verb dropdowns with appropriate options
    }
}

function getSelectedOptions(phraseType) {
    //Get selected options from dropdowns based on phrase type
    const base = phraseType === 'NP' ? document.getElementById('nBaseSelect').value : document.getElementById('vBaseSelect').value;
    const perNum = phraseType === 'NP' ? document.getElementById('nNumSelect').value : document.getElementById('vPerNumSelect').value;
    const det = phraseType === 'NP' ? document.getElementById('nDetSelect').value : "";
    const nCase = phraseType === 'NP' ? document.getElementById('nCaseSelect').value : "";
    
    //English translations for selected options
    const engBase = phraseType === 'NP' ? Object.keys(nBases).find(key => nBases[key] === base) : Object.keys(vBases).find(key => vBases[key] === base);
    const engPerNum = phraseType === 'NP' ? Object.keys(nNumOptions).find(key => nNumOptions[key] === perNum) : Object.keys(vPerNumOptions).find(key => vPerNumOptions[key] === perNum);
    const engDet = phraseType === 'NP' ? Object.keys(detOptions).find(key => detOptions[key] === det) : "";
    const engCase = phraseType === 'NP' ? Object.keys(nCaseOptions).find(key => nCaseOptions[key] === nCase) : "";

    return { phraseType, base, perNum, det, nCase, eng: { engPerNum, engDet, engCase, engBase } };
}


class wordBuilder {
    constructor(obj){
        this.type = obj.phraseType; //NP, VP, QP, or CP
        this.base = obj.base; //Chosen verb/noun
        this.perNum = obj.perNum; //person and number (e.g. "I", "two", etc.) for VP or just number for NP
        this.det = obj.det; //determinative (only for NP)
        this.nCase = obj.nCase; //noun case (only for NP)
        this.eng = obj.eng; //English translation components
        this.mood = obj.phraseType === 'VP' ? "[Ind.Intr]"
                    : obj.phraseType === 'QP' ? "[Intrg.Intr]"
                    : obj.phraseType === 'CP' ? "[Opt.Pres.Intr]"
                    : "";
    }

    //temp output method to test parameters are being passed correctly
    printPhrase(){
        return this.type === 'NP' ? `${this.base}^${this.nCase}${this.det}${this.perNum}` : `${this.base}^${this.mood}^${this.perNum}`;
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
    const phraseType = document.querySelector('input[name="phraseType"]:checked').value;
    const outputDiv = document.getElementById('output');
    const options = getSelectedOptions(phraseType);
    const phrase = new wordBuilder(options);
    console.log("Testing word builder...", phrase);
    outputDiv.textContent = phrase.printPhrase();
}