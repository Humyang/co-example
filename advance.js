import co from 'co'
function * ye1(){
    let a = yield Promise.resolve(1)
    return a
}
co(function *(){
    let a = yield ye1
    let b = yield ye1

    console.log(a,b)
})