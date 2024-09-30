function isUnique(string){
    let hash = {}
    for (let char = 0; char < string.length; char++) {
        if (!hash.hasOwnProperty(string[char])) {
            hash[string[char]] = 1
        }else{
            return false
        }
    }
    return true 
}

function isUniqueWithoutAdditionalDataStructures(string){
    for(let i = 0; i < string.length; i++){
        for(let j = i + 1; j < string.length; j++){
            if(string[i] == string[j]){
                return false
            }
        }
    }
    return true
}

console.log(isUniqueWithoutAdditionalDataStructures('janeTran'))