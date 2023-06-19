// function abc(a = "not provided"){
//     console.log(a)
// }abc()


                    //REST PRAMITER
// function abc(...rest){
//  console.log(rest)
// }abc("umar","ghose","ahmad")



// function abc(){
// console.log(arguments)
// }
// abc("Umar","ghose","father");



                                //Array & string & object method = splat oprator
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [7,8,9,10,11,12];
// let marge = [...arr1,...arr2];
// console.log(marge);


                                //Destructuring in  object
// let obj = {
//     firstName: "umar",
//     lastName: "khan",
//     fatherName: "Aamir"
// }
// let { firstName, lastName, fatherName} = obj;
// console.log(firstName , lastName , fatherName);




                                //Destrucring in array
// let arr = ["umar", "khan","Aamir","khan"];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d);



                            //for loap replace / for each

// let arr = ["umar", "khan","Aamir","khan"];
// for(let i = 0; i < arr.length; i++){                 //=>replace
//     console.log(arr[i])
// }

// let arr = ["umar", "khan","Aamir","khan"];
// arr.forEach(function(i,v){
//     console.log(i,v)
// })



//                                              //Map   = return        
// let arr = ["umar", "khan","Aamir","khan"];
// let result = arr.map(function(v,i){
//     console.log(v,i)
//     return `${v} programer`
// })
// let finalresult = result
// console.log(finalresult);


                                            //FILTER = return true false
// let arr = ["umar", "khan","Aamir","khan", 1010110, true];
// let result = arr.filter(function(v){
//     console.log(v)
//     return typeof v === "string"
// })
// let final =  result;
// console.log(final);


                                            //SOME = return true false
// let arr = ["umar", "khan","Aamir","khan", 1010110, true];
// let result = arr.some(function(v){
//     return v === "umar"
// })
// console.log(result)

                                                //Sort
// let arr = ["umar", "khan","Aamir","khan", 1010110, true];
// console.log(arr.sort())



                                                //Reduce  = return
// let arr = [1,2,3,4,5,6];
// let result = arr.reduce(function(a,b){
//     return a > b ? a : b;
// })
// console.log(result);


                                            //Concat     = string & array
// let arr = ["umar","khan"];
// let arr2 = ["Aamir","khan"];
// console.log(arr.concat(arr2));