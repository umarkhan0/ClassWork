                            //segronus  v/s  asingronos


            //singronos    
            //for exapmple
// for(var i = 0; i < 5; i++){
//     console.log(i)
// };
// console.log("umar");


                        //asignronus
                        //for exapmple
//  setTimeout(function(){
//     console.log("Hello")
// },3000);
// console.log("umar");



                                //API Data                = call back

// function foo(callback){
//     setTimeout(function (){
//     let obj ={
//         name: "umar",
//         father: "aamir"
//     }
//     callback(obj)
// },2000)
// }
// function abc(data){
// console.log(data)
// }
// foo(abc)


                                //promis.

// function foo(){
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let obj ={
//                     name: "umar",
//                     father: "aamir"
//                 } 
//             resolve(obj)

//     } ,5000)
// })
// }
// foo()
// .then(function(data){
// console.log("data",data)
// })
// .catch(function(err){
//     console.log(err)
// })



                                             //API data get
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(data){
// return data.json()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(data){
//     console.log(data)
// })