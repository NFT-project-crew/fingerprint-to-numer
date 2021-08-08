function handle(e) {
    if (e.keyCode === 13) {
        calculation()
    }
}


let inputString = "";




//postavlja se sljedece pitanje, kaj sa slovima koja ne dolaze u FP? dal da ih ubacimo u nas brojevni sustav,
//dal da postavimo vrijednost istu ko slovo prije (trenutni nacin)? (algoritam izrade FP-a se nebi trebal menjati,
//al ak se promeni u buducnosti, da nas to nebi sjebalo...)
const letterNumberEquivalent = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 10, //doesn't occur in the fingerprint
    c: 11,
    d: 12,
    e: 13,
    f: 14,
    g: 15,
    h: 16,
    i: 16, //doesn't occur in the fingerprint
    j: 17,
    k: 18,
    l: 19,
    m: 20,
    n: 21,
    o: 21, //doesn't occur in the fingerprint
    p: 22,
    q: 23,
    r: 24,
    s: 25,
    t: 26,
    u: 27,
    v: 28,
    w: 29,
    x: 30,
    y: 31,
    z: 32,
}



//our number system base is 33
const numberSystemBase = 33;




const calculation =  () => {
    const currentQuery = document.querySelector('.inputString').value;
    const queryArray = currentQuery.split("");
    const queryArrayReversed = queryArray.reverse();
    let finalNumber =0;
    let maxNumberPossible=0;

    //calculation for max number possible with x (queryArray.length) number of digits
for (let i = 0; i < queryArray.length; i++) {
    
    let currentDigitForMax = (numberSystemBase-1)*(Math.pow(numberSystemBase,i));
maxNumberPossible = maxNumberPossible + currentDigitForMax;
    let currentDigitForTransform = letterNumberEquivalent[queryArrayReversed[i]]*(Math.pow(numberSystemBase,i));
     finalNumber = finalNumber + currentDigitForTransform;


    
}



console.log(maxNumberPossible)

// //transformation of input, 33 number based system to decimal
// for (let i = queryArray.length-1; i >= 0; i--){


//     console.log(queryArray[i], "query Array")
//     let currentDigit = letterNumberEquivalent[queryArray[i]]*(Math.pow(numberSystemBase,i));
// console.log("filip", currentDigit)
    
//     finalNumber = finalNumber + currentDigit;

// }


    document.querySelector(".number").innerHTML = `number ${currentQuery} in 33 number based system, transformed to 10 (decimal) based system equals:${finalNumber}`
    document.querySelector(".minMax").innerHTML = `max number with ${queryArray.length} digits in 33 number based system: ${maxNumberPossible}`

}




