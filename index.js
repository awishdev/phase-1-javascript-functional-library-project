function myEach(collection, callback){
    let holderArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    
    holderArr.forEach(element => {
        callback(element);
        
    });
    
    return collection;
}

function myMap(collection, callback){
    let holderArr = [];
    let newArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    holderArr.forEach(element => {
        newArr.push(callback(element));
        
    });
    
    return newArr;


}


function myReduce(collection, callback, acc = 0){
    let loopCounter = 0;
    let holderArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    if(acc === 0){
        acc = holderArr[0];
        loopCounter = 1;
    }
    
    for (loopCounter; loopCounter < holderArr.length; loopCounter++){
        acc = callback(acc, holderArr[loopCounter], holderArr);
    }
        
    
    return acc;
}

function myFind(collection, predicate){
    let loopCounter = 0;
    let holderArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    while(predicate(holderArr[loopCounter]) === false){
        loopCounter++;
        if (loopCounter === holderArr.length){
            return undefined;
        }
    }
    return holderArr[loopCounter];
}

function myFilter(collection, predicate){

    let loopCounter = 0;
    let holderArr = [];
    let rtnArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    while(loopCounter < holderArr.length){
        if(predicate(holderArr[loopCounter]) === true){
            rtnArr.push(holderArr[loopCounter]);
            
            
        }
        loopCounter++;
    }
    return rtnArr;

}

function mySize(collection){

    let holderArr = [];
    if (typeof(collection) === "object")
    {
        holderArr = Object.values(collection);
        
    }
    else if (typeof(collection) === "array"){
        holderArr = [...collection];
        
    }
    return holderArr.length;
}

function myFirst(array, n = 0){
    let holderArr = [...array]
    let rtnArr = [];
    let loopCounter = 0;
    if (n === 0){
        return holderArr[n];
    }
    else if(n < holderArr.length){
        while(loopCounter < n){
            rtnArr.push(holderArr[loopCounter]);
            loopCounter++;
        }
        return rtnArr;

    }
    else{
        return holderArr;
    }

}

function myLast(array, n = 0){

    let holderArr = [...array]
    let rtnArr = [];
    let loopCounter = 0;
    if (n === 0){
        return holderArr[(holderArr.length - 1)];
    }
    else if(n < holderArr.length){
        while(loopCounter < n){
            rtnArr.push(holderArr[(holderArr.length - n + loopCounter)]);
            loopCounter++;
            
        }
        return rtnArr;

    }
    else{
        return holderArr;
    }

}

function myKeys(obj){
    let rtnArr = [];
    for (const key in obj){
        rtnArr.push(key);
    }
    return rtnArr;
}

function myValues(obj){
    let rtnArr = [];
    for (const key in obj){
        rtnArr.push(obj[key]);
    }
    return rtnArr;
}