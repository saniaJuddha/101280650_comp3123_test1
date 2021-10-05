//Sania Juddha 101280650
const mixedArray = ['PIZZA', 10, true, 25, false, "Wings"];

function lowerCaseWords(arr) {

    let out = new Promise((resolve, reject) => {

        array = [];
        var count = 0;
//loop through and saperate strings and non strings
        for (i in arr) {
            if (typeof arr[i] == "string") {
                newi = arr[i].toLowerCase();
//add strings to new made array
                array[count] = newi;
                count = count + 1;


            }
        }
        //if an array was made resolve if not then reject
        if (count == 0) {
            reject('No String elements found')
        } else {
            resolve(array);
        }
    })
    return out;

}

lowerCaseWords(mixedArray).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});