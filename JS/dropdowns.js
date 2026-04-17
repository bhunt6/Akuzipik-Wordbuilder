const vBases = {
    "sleep": "qavagh(V)",
    "eat": "negh(V)",
    "arrive": "aane(V)"
}

const nBases = {
    "land": "nuna(N)",
    "kayak": "qayaq(N)",
    "reindeer": "quyngigh(N)",
    "squirrel": "sikig(N)",
    "walrus": "ayvegh(N)",
    "knife": "savig(N)",
    "house": "mangteghagh(N)",
    "dog": "qikmigh(N)",
    "son": "ighnegh(N)",
    "daughter": "panig(N)",
    "mother": "naa(N)",
    "father": "ata(N)",
    "child": "taghnughhagh(N)",
    "food": "negh(N)",
    "water": "megh(N)",
    "boat": "angyagh(N)"
}

const vPerNumOptions = {
    "I": "[1Sg]",
    "You": "[2Sg]",
    "He/she/it": "[3Sg]",
    "We (2)": "[1Du]",
    "You (2)": "[2Du]",
    "They (2)": "[3Du]",
    "We (3+)": "[1Pl]",
    "You (3+)": "[2Pl]",
    "They (3+)": "[3Pl]"
}

const nNumOptions = {
    "one": "Sg]",
    "two": "Du]",
    "three or more": "Pl]"
}

//Want to add demonstratives here as well e.g. "una", "taana", etc.
const detOptions = {
    "the": "",
    "my": "1SgPoss.",
    "your": "2SgPoss.",
    "his/her/its": "3SgPoss.",
    "our (2)": "1DuPoss.",
    "your (2)": "2DuPoss.",
    "their (2)": "3DuPoss.",
    "our (3+)": "1PlPoss.",
    "your (3+)": "2PlPoss.",
    "their (3+)": "3PlPoss.",
}

const nCaseOptions = {
    "the...": "[Abs.", //absolutive
    "the...(rel)": "[Rel.", //relative/ergative
    "from...": "[Abl_Mod.", //ablative-modalis
    "at/in...": "[Loc.", //localis
    "to...": "[All.", //terminalis
    "through...": "[Prl.", //vialis
    "like...": "[Equ." //equalis
}