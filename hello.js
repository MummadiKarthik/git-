//debounce

function debounce(fn,delay){
    let timer;
    return function(args){
        clearInterval(timer)
        timer=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}
function kar(name,age){
console.log(name+" "+age)
}
let s=debounce(kar,2000);
s(["karthik",23])

function throttle(fn,delay){
    let last=0;
    return function(...args){
     setTimeout(()=>{
           if(Date.now()-last>=0){
            last=Date.now()
            fn.apply(this,args)
        }
     },delay)
    }
}

function bar(a){
console.log(a)
}
let a=throttle(bar,2000);
a("karthik")


//decorator

function karthik(fn){
    return function(...args){
        console.log("Before function")
        let s=fn(...args);
        console.log("After function")
        return s;
    }
}
function kaar(a,b){
    return a+b;
}
let sa=karthik(kaar)
console.log(sa(45,23))

 function * generator(){
 for(let i=1;i<10;i++){
   yield i
 }
 }
 
 let saa=generator();
 
console.log(saa.next())
console.log(saa.next())
console.log(saa.next())
console.log(saa.next())