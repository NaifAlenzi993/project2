const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const port = 5000;

let Prodects = { cars: [
                        {id: 1 , name:"Chevrolet Silverado 2020" , url:"https://s.car.info/image_files/360/0-817877.jpg" , info:"" , price:50000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 2 , name:"GMC Yukon 2021" , url:"https://s.car.info/image_files/360/0-852615.jpg" , info:"" , price:68000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 3 , name:"Chevrolet Traverse 2020" , url:"https://s.car.info/image_files/360/0-867912.jpg" , info:"" , price:42000 , type: "larg" , comments: [] , like:"black"} ,
                        {id: 4 , name:"GMC Acadia 2021" , url:"https://s.car.info/image_files/360/gmc-acadia-front-side-0-336319.jpg" , info:"" , price:41000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 5 , name:"Chevrolet Tahoe 2021" , url:"https://s.car.info/image_files/360/0-845025.jpg" , info:"" , price:54000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 6 , name:"Chevrolet Cheyenne 2019" , url:"https://s.car.info/image_files/360/0-817755.jpg" , info:"" , price:57000 , type:"larg" , comments: [], like:"black"}] , } 


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
  let len = Likes.filter((element , i) => {
    return element.id == id
  })

  if (len == 0){
    Likes.push(Prodects.cars[id-1])
    Prodects.cars[id-1].like = "red"
  }else{
    Prodects.cars[id-1].like = "black"
    res.json("1");
  }
  
})


app.get("/like", (req, res) => {
  res.status(200);
  res.json(Likes);
});

//delete Like
app.delete("/like/:id" , (req , res) => {
  const id = req.params.id;
 
  Likes.forEach((element , i) => {
    if (element.id == Number(id)) {
      Likes.splice(i,1)
      Prodects.cars[Number(id-1)].like = "black"
    }
    // console.log(element);
  });
  // Likes.splice(id-1 , 1)
  // console.log(Likes);
  // res.status(200);
  // res.json(Likes);
});

app.get("/car/:id", (req, res) => {
  let id = req.params.id
  console.log(Prodects.cars[id-1].name);
   res.status(200);
  res.json(Prodects.cars[id-1]);

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