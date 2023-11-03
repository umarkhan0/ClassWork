

// let object = 
// 

fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        for (var i = 0; i < json.length; i++){
            console.log(json[i]);
      let name = document.getElementById("container").innerHTML += `
      
      <img height="100px" src="https://jbsoftware.ca/wp-content/uploads/web-design.jpg" alt="">
<p>name: <span id="name">${json[i].name}</span></p>
      `

        }
      }
      
// let fname = document.getElementById("fname").innerHTML = object.fathername
      
      )