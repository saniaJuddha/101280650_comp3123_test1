//Sania Juddha 101280650

//changing the given delayedSuccess in callbacks.js to promise
const resolvePromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        reslove(success);
    }, 500)
});

//changing the given delayedException in callbacks.js to promise
const rejectPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            reject(e);
        }
    }, 500)
})

resolvePromise.then((success) => {
    console.log(success)
});
rejectPromise.catch(e => {
    console.error(e)
});