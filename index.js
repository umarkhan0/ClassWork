fetch("http://localhost:4000/user",{
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, method: "post",
     body: JSON.stringify({
    name: "umar khan",
    password: "mypasss khan"
  })
  
}).then( response => response.json())
  .then( (response) => { 
   console.log(response)
}).catch(err => console.log(err))
