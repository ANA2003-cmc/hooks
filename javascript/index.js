//null,undefined,number,string,BigInt,boolean,symbol(premitive datatype)
//function,object,array(non premitive datatype)
// let a=2;
// console.log(typeof(a));
//let(redeclare impossible but reasign possible),,,,,const(redeclare and reasign both impossible),,,,,var(redeclare and reasign both are posible)
// let a=[1,2,3,4]
// let b=a.push(12,34)
// console.log(a) 
//let a=[1,2,3,4]
// let b=a.pop()
// console.log(a)
// let b=a.shift()
// console.log(a)
// let b=a.unshift(13,15)
// console.log(a)
//let a=[1,2,3,4,5,6,7,8]
// let b=a.slice(0,4)     ,,,,,,,,,,(1st put index number & then position)
// console.log(b)
//let b=a.splice(6,1,"op")    ,,,,,,,,,,(1st put index number then how much number we remove & then put which i want to add)
//console.log(a)
// let b=a.splice(6,0,"op")
// console.log(a)
// let b=a.splice(2,1)
// console.log(a)
// let b=a.splice(2,3,"aa","bb","cc")
// console.log(a)
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }
// let t=[]                     //(ekhane t k globally declare kora hoyeche)
// for(i=0;i<a.length;i++){
//     t.push(a[i]*2)
// }
// console.log(t)         //(jodi ami loop er modhhye console.log kortam tahole jotogulo index number ache totober print hobe t)
// for(let i in a){
// //     console.log(i)        //(ekhane for in loop e bydefault index number print hoy  & we can print value also)

// console.log(a[i])          //(ekhane value print holo)

//  }
// for(let i of a){
//     console.log(i)       //(for of loop only value return kore index return korte parena)
// }
// for(let i=a.length-1;i>0;i--){         //(a.length-1 korle undefined asbena)
//     console.log(a[i])
// }
// a.forEach((item)=>{           //(=>fat arrow & eta use hoy single statement use korar jonnyo)
//     console.log(item)     //(listing e use kora hoy)
// })