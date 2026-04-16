const vBases = {
    "qavagh(V)": "sleep",
    "negh(V)": "eat",
    "aane(V)": "arrive",

}

const nBases = {
    "nuna(N)": "land",
    "qayaq(N)": "kayak",
    "quynik(N)": "caribou",
    "sikik(N)": "squirrel"
}

const vPerNumOptions = {
    "I": "[1Sg]",
    "You": "[2Sg]",
    "He/she/it": "[3Sg]",
    "We (2)": "[1Du]",
    "Yu (2)": "[2Du]",
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
    "my": "Poss1Sg.",
    "your": "Poss2Sg.",
    "his/her/its": "Poss3Sg.",
    "our (2)": "Poss1Du.",
    "your (2)": "Poss2Du.",
    "their (2)": "Poss3Du.",
    "our (3+)": "Poss1Pl.",
    "your (3+)": "Poss2Pl.",
    "their (3+)": "Poss3Pl.",
}

const nCaseOptions = {
    "the...": "[Abs.", //absolutive
    "the...(rel)": "[Rel.", //relative/ergative
    "from...": "[Abl_Mod.", //ablative-modalis
    "at/in...": "[Loc.", //localis
    "to...": "[All.", //terminalis
    "through...": "[Perl.", //vialis
    "like...": "[Equ." //equalis
}