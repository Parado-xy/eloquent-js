function twoSum(nums, target){
    // Define a Hash Map
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        // Get the difference between the target and the current value
        let num = target - nums[i]
        // If the difference is already in the hash map,
        if(hash.hasOwnProperty(`${num}`)){
            
            // It means we've see the number that when added to num[i] gives target
            return [hash[`${num}`], i]
        }
            // If we've not seen it before, store the value and 
            // its index in the hash map. 
            hash[`${nums[i]}`] = i

    }
    return null
}

function isValidString(s){
  let  openingSquare = '[';
  let  closingSquare = ']';
  let  openingCurly = '{';
  let  closingCurly = '}';
  let  openingCurved = '(';
  let  closingCurved = ')';

  let count = 0;
  let valid = true

  while(count + 1 < s.length){
    if (s[count] == openingSquare){
        if(s[count + 1] == (closingCurly) || s[count + 1] ==(closingCurved)){
            valid = false
        }
    }else if(s[count] == openingCurved){
        if(s[count + 1] == (closingCurly) ||s[count + 1] == (closingSquare)){
            valid = false
        }
    }else if(s[count] == openingCurly){
        if(s[count + 1] == (closingCurved) ||s[count + 1] == (closingSquare)){
            valid = false
        }
    }

    if (!valid){
        return false
    }count += 1;
  } 

    return true
}

console.log(isValidString("()[]{}"))