const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const port = 5000;

const imgCar = [
  "https://s.car.info/image_files/360/0-817877.jpg" , 
  "https://s.car.info/image_files/360/0-852615.jpg" , 
  "https://s.car.info/image_files/360/0-867912.jpg" ,
  "https://s.car.info/image_files/360/gmc-acadia-front-side-0-336319.jpg",
  "https://s.car.info/image_files/360/0-845025.jpg",
  "https://s.car.info/image_files/360/0-817755.jpg"
]



let Prodects = { cars: [
                        {id: 1 , name:"Chevrolet Silverado 2020" , url:imgCar[0] , info:"" , price:50000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 2 , name:"GMC Yukon 2021" , url:imgCar[1] , info:"" , price:68000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 3 , name:"Chevrolet Traverse 2020" , url:imgCar[2] , info:"" , price:42000 , type: "larg" , comments: [] , like:"black"} ,
                        {id: 4 , name:"GMC Acadia 2021" , url:imgCar[3] , info:"" , price:41000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 5 , name:"Chevrolet Tahoe 2021" , url:imgCar[4] , info:"" , price:54000 , type: "larg" , comments: [] , like:"black"} , 
                        {id: 6 , name:"Chevrolet Cheyenne 2019" , url:imgCar[5] , info:"" , price:57000 , type:"larg" , comments: [], like:"black"}] , } 


const users = [
  {id:1 , name:"Mayouf" , email:"mayouf@mayouf.com" , password:1234 , type:"Admin" , url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8OMuPIqaW0B7IGlseraXzyJM_-h797mqmA&usqp=CAU"},
  {id:2 , name:"Naif" , email:"naif@naif.com" , password:1234 , type:"User" , url:"https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"}

]

const Likes = []

app.get("/", (req, res) => {
  res.status(200);
  res.json("hello app");
});

app.get("/users", (req, res) => {
  res.status(200);
  res.json(users);
});

app.get("/prodects", (req, res) => {
  res.status(200);
  res.json(Prodects);
});

app.post("/like/:id" , (req , res) => {
  let id = req.params.id
  let len = Likes.filter((element , i) => {
    return element.id == id
  }).length

  if (len == 0){
    Likes.push(Prodects.cars[id-1])
    Prodects.cars[id-1].like = "red"
    res.json(Prodects); 
  }else{
    Prodects.cars[id-1].like = "black"
    res.json("-1"); 
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