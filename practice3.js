// Call-backs VS Promises:
 
function getNumber(cb){
    setTimeout(() => {
        cb(10)
    }, 100)
}

getNumber(n => {
    console.log(n)
})

function getNumberpromise(){
    return new Promise((resolve, reject) => {
        getNumber(resolve)
    })
}

const promise = getNumberpromise()

promise.then(n => console.log(n))