// Promise
function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(n1+n2);
        }, delayTime);
    })
    }    
delayedResultPromise(4, 5, 3000).then(console.log);


// async await
async function main() {
    const result = await delayedResultPromise(6, 7, 2000)
    console.log(result);
}
main();