const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const port = 5000;

let Prodects = { cars: [
                        {id: 1 , name:"Chevrolet Silverado 2020" , url:"https://s.car.info/image_files/360/0-817877.jpg" , info:"" , price:50000 , type: "larg" , comments: [] , like:false} , 
                        {id: 2 , name:"GMC Yukon 2021" , url:"https://s.car.info/image_files/360/0-852615.jpg" , info:"" , price:68000 , type: "larg" , comments: [] , like:false} , 
                        {id: 3 , name:"Chevrolet Traverse 2020" , url:"https://s.car.info/image_files/360/0-867912.jpg" , info:"" , price:42000 , type: "larg" , comments: [] , like:false} ,
                        {id: 4 , name:"GMC Acadia 2021" , url:"https://s.car.info/image_files/360/gmc-acadia-front-side-0-336319.jpg" , info:"" , price:41000 , type: "larg" , comments: [] , like:false} , 
                        {id: 5 , name:"Chevrolet Tahoe 2021" , url:"https://s.car.info/image_files/360/0-845025.jpg" , info:"" , price:54000 , type: "larg" , comments: [] , like:false} , 
                        {id: 6 , name:"Chevrolet Cheyenne 2019" , url:"https://s.car.info/image_files/360/0-817755.jpg" , info:"" , price:57000 , type:"larg" , comments: []}] , like:false} 

const Likes = []

app.get("/", (req, res) => {
  res.status(200);
  res.json("hello app");
});

app.get("/prodects", (req, res) => {
  res.status(200);
  res.json(Prodects);
});

app.post("/like/:id" , (req , res) => {
  let id = req.params.id
  Likes.push(Prodects.cars[id-1])
  // console.log(Likes);
})

app.get("/like", (req, res) => {
  res.status(200);
  res.json(Likes);
});

app.delete("/like/:id" , (req , res) => {
  const id = req.params.id;
 
  Likes.forEach((element , i) => {
    if (element.id == Number(id)) {
      Likes.splice(i,1)
    }
    // console.log(element);
  });
  // Likes.splice(id-1 , 1)
  // console.log(Likes);
  // res.status(200);
  // res.json(Likes);
});


app.listen(port, () => {
  console.log("server is running");
});


// app.post("/todos/:name", (req, res) => {
//   const newName = req.params.name;
//   todos.push(newName);
//   console.log(todos);
//   res.status(200);
//   res.json(todos);
// });

// app.delete("/todos/delete/:id" , (req , res) => {
//   const id = req.params.id;
//   todos.splice(id , 1)
//   console.log(todos);
//   res.status(200);
//   res.json(todos);
// });

// app.put("/todos/update/" , (req , res) => {
//  const {newVal , oldVal} = req.body

// console.log(todos.findIndex(()=> oldVal));
//  todos.forEach((element , i) => {
//    if (oldVal == element) {
//     todos[i] = newVal
//    }
//  })

//  console.log(todos);

//   res.status(201);
//   res.json(todos);
// });