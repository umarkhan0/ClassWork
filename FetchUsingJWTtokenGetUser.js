fetch("http://localhost:3000/api/allget?key=123",{
    headers: {
"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1Y2Y1MWI3NDA5YmY4NDVjNDUyYTQiLCJpYXQiOjE3MDAyMDQwODZ9.nIw9SyhbN9_loeZJtbhDRq3K3zr5fYZ98cFudbaYxSM"
    }
})
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err))
