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
function p_s(){
    return promise1(true).then(function(res){
        console.log('recive from promise: ,',res)
        return 'from promise\' then' 
    })
}
co(function *(){
    let a = yield ye1
    let b = yield ye1
    let c = yield promise1(true)
    console.log(a,b)
    console.log('c: ',c)
    // let d = yield promise1(false)
    let d = yield p_s()
    console.log('d: ',d)
}).catch(function(err){
    console.log('err：',err)
})