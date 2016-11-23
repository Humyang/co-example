import co from 'co'
function * ye1(){
    let a = yield Promise.resolve(1)
    return a
}
function promise1(pram){
    return new Promise(function(resolve, reject){
        if(pram){
            resolve(true)
        }else{
            reject(false)
        }
    })
}
co(function *(){
    let a = yield ye1
    let b = yield ye1
    let c = yield promise1(true)
    console.log(a,b)
    console.log('c: ',c)
    let d = yield promise1(false)

}).catch(function(err){
    console.log('err：',err)
})