// input:- aaaabbccc
// output:- 4a2b3c

const len = (str) =>{
    let countedString = [];
    const pair = str.split('')
    let count = 0
    pair.forEach((element,index) => {
        count++
        if(element!==pair[index+1]){
            countedString.push(count,element)
            count = 0
        }
    });
    return countedString.join('')
}

console.log(len('aaaabbccc'));