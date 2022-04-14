const occur =(arr)=>{
    const obj = {}
    let value = 0
    for (const iterator of arr) {
        // if(obj[iterator]){
        //     obj[iterator]= +1
        // }
        // obj[iterator]=obj[iterator]+1
        if(obj[iterator]){
            obj[iterator] += 1;
        }else{
            obj[iterator]= 1
        }
        // console.log(obj);

    }
    let uniqueElem='';
    let unique = 0;
    for (const key in obj) {
        if(obj[key]>unique){
            uniqueElem = key
            unique = obj[key]
        }
    }
    console.log(uniqueElem)
}

occur(["facebook", "google", "facebook", "google", "google",'google','facebook']);