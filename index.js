import express from "express";
const app = express();
const port = 4000;
app.use(express.json());
const arrObj = [
    {
        id: 1,
        name: "umar",
        lastName: "khan",
        fatherName: "Aamir"
    }
]
app.get( "/user" , (req , res) => {
res.send(arrObj)
})
app.post("/user" , (req , res) =>{
    arrObj.push({id:  arrObj.length + 1 , ...req.body})
    console.log(req.body)
    res.send({message: "user addad sussesfully"})
});
app.delete("/user/:id" , (req , res) =>{
    let index = arrObj.findIndex(v => v.id  == Number(req.params.id));
    arrObj.splice(index , 1);
    res.send({message: "user deleted sussesfully"})

})
app.put("/user/:id" , (req , res) => {
    let index = arrObj.findIndex(v => v.id  == Number(req.params.id));
    arrObj.splice(index , 1 , {id: Number(req.params.id) , ...req.body});
    res.send({message: "user updated sussesfully"})

})
app.listen(port , () =>{
    console.log("Server is runing port" , port);
})



