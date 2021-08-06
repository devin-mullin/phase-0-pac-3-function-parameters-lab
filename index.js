
function introduction(Devin) {
    return `Hi, my name is ${Devin}.`    
}

function introductionWithLanguage(Devin, JavaScript) {
    return `Hi, my name is ${Devin} and I am learning to program in ${JavaScript}.`
}

function introductionWithLanguageOptional(Devin, _language="JavaScript"){
    return `Hi, my name is ${Devin} and I am learning to program in ${_language}.`
}
