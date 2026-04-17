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
    "...": ["", "[Abs."], //absolutive
    "of (relative)...": ["(Relative Case)", "[Rel."], //relative/ergative
    "from...": ["from", "[Abl_Mod."], //ablative-modalis
    "at/in...": ["at/in", "[Loc."], //localis
    "to...": ["to", "[All."], //terminalis
    "through...": ["through", "[Prl."], //vialis
    "like...": ["like", "[Equ."] //equalis
}

const verbExceptions = {
    '[Intrg.Intr]^[2Sg]':'[Intrg.Intr.2Sg]',
    '[Intrg.Intr]^[2Pl]':'[Intrg.Intr.2Pl]',
    '[Intrg.Intr]^[2Du]':'[Intrg.Intr.2Du]',
    '[Opt.Pres.Intr]^[2Sg]':'[Opt.Pres.Intr.2Sg]',
    '[Opt.Pres.Trns]^[2Sg.3Sg]':'[Opt.Pres.Trns.2Sg.3Sg]',
    '[Opt.Neg.Pres.Trns]^[2Sg.3Pl]':'[Opt.Neg.Pres.Trns.2Sg.3Pl]',
    '[Opt.Neg.Pres.Trns]^[2Pl.3Pl]':'[Opt.Neg.Pres.Trns.2Pl.3Pl]',
    '[Opt.Neg.Pres.Trns]^[2Du.3Pl]':'[Opt.Neg.Pres.Trns.2Du.3Pl]'
}


//Possible noun exceptions
//'[All.2DuPoss.Du]' <- doesn't produce a surface form
//'[Equ.Sg.3SgPoss]' <- this one has a flipped possessive marker
//'[Equ.Sg.3PlPoss]' <- this one has a flipped possessive marker