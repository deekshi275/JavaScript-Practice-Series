 let a = 3
let prim = true
for (let i =2;i<=Math.floor(Math.sqrt(a));i++){
    if (a%i==0){
        prim = false
    }
}if (prim){
    console.log('prime number')

}else{
    console.log('not a prime number')
}


