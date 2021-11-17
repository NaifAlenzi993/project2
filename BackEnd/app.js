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

const carVid = [
  "https://www.youtube.com/embed/rDUBW5x5UKM",
  "https://www.youtube.com/embed/PDhAwElOUcw",
  "https://www.youtube.com/embed/qmdzlPmbyxg",
  "https://www.youtube.com/embed/TqON3x6JyKk",
  "https://www.youtube.com/embed/TlPCn54Lh6Y",
  "https://www.youtube.com/embed/rDUBW5x5UKM",
]

const partsImg = [
  "https://m.media-amazon.com/images/I/41GqD1Zo8UL._SS400_.jpg",
  "https://ecom-dam.ext.gm.com/parts/images/20_GMC_SIE_SE5_18W_01.jpg/640X640",
  "https://ecom-dam.ext.gm.com/parts/images/19_CHE_SIL_DVD_10.jpg/640X640",
  "https://ecom-dam.ext.gm.com/parts/images/19_GMC_SIE_BAR_01.jpg/640X640",
  "https://media.chevrolet.com/content/Pages/news/ca/en/2014/Mar/0314_CamaroZ28/_jcr_content/rightpar/imagewithmodal/image.resize.maxw_276.jpg/1393266503756.jpg",
  "https://i.ebayimg.com/images/g/LkYAAOSwgmJXxPYP/s-l300.jpg"
  

]




let Prodects = { cars: [
                        {id: 1 , name:"Chevrolet Silverado 2020" , url:imgCar[0] , vid:carVid[0] , info:"" , price:50000 , type: "larg" , comments: [] , like:"black" , rate: 5} , 
                        {id: 2 , name:"GMC Yukon 2021" , url:imgCar[1] ,vid:carVid[1] , info:"" , price:68000 , type: "larg" , comments: [] , like:"black" , rate: 4} , 
                        {id: 3 , name:"Chevrolet Traverse 2020" , url:imgCar[2] , vid:carVid[2] ,info:"" , price:42000 , type: "larg" , comments: [] , like:"black" , rate: 3} ,
                        {id: 4 , name:"GMC Acadia 2021" , url:imgCar[3] , vid:carVid[3] ,info:"" , price:41000 , type: "larg" , comments: [] , like:"black" ,  rate: 4} , 
                        {id: 5 , name:"Chevrolet Tahoe 2021" , url:imgCar[4] , vid:carVid[4] ,info:"" , price:54000 , type: "larg" , comments: [] , like:"black" ,  rate: 5} , 
                        {id: 6 , name:"Chevrolet Cheyenne 2019" , url:imgCar[5] , vid:carVid[5] ,info:"" , price:57000 , type:"larg" , comments: [], like:"black" ,  rate: 3}] ,
                      
                      
                        
  parts:[
    {id:1,  name:"New Front Grille For 2007-2014 GMC Yukon With Denali Package, Chrome GM1200610" , url:partsImg[0] , price:201},
    {id:2,  name:"18x8.5-Inch Aluminum Multi-Spoke Wheel in High Gloss Black" , url:partsImg[1] , price:520},
    {id:3,  name:"Rear-Seat Infotainment System with DVD Player in Jet Black Cloth" , url:partsImg[2] , price:1950},
    {id:4,  name:"" , url:partsImg[3] , price:990},
    {id:5,  name:"CAMARO Z/28 ENGINEERS GET A GRIP ON WHEEL SLIP" , url:partsImg[4] , price:620},
    {id:6,  name:"Chevrolet Door Handle Decal Sticker logo Silverado Truck logo impala SS Set of 4" , url:partsImg[5] , price:20},
    
  ]

                      } 
imgProfile = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8OMuPIqaW0B7IGlseraXzyJM_-h797mqmA&usqp=CAU",
  "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
]

const users = [
  {id:1 , name:"mayouf" , email:"mayouf@mayouf.com" , password:1234 , type:"Admin" , url:imgProfile[0],state:false , message:[]},
  {id:2 , name:"naif" , email:"naif@naif.com" , password:1234 , type:"User" , url:imgProfile[1] , state:false ,  message:[]},
  {id:3 , name:"hiji" , email:"hiji@hiji.com" , password:1234 , type:"User" , url:imgProfile[1] , state:false ,  message:[]},

]


const Likes = []

app.get("/", (req, res) => {
  res.status(200);
  res.json("hello app");
});


app.get("/users", (req, res) => {
  const user = req.body;
  const members = users.filter((elem , i )=>{
    return elem.state == false
    
  })
  console.log(members);
  res.status(200);
  res.json(members);
});

app.get("/profile", (req, res) => {
  const user = req.body;
  const members = users.filter((elem , i )=>{
    return elem.state == true
    
  })
  console.log(members);
  res.status(200);
  res.json(members);
});

app.post("/message/" , (req , res) => {
  let obj = req.body 
  users.forEach((element , i) => {
    if (obj.id == element.id){
      users[i].message.push(obj.message)
     console.log(users[i].message);
    }
  });
  res.status(200);
  res.json(users[obj.id-1].message);
  
 });


// logout 
app.delete("/logout/:id", (req, res) => {
  let state = false
  console.log(req.params.id);
  users.forEach((elem)=>{
    if (elem.id == req.params.id){
      elem.state = false
    }
  })
});

//check if Account Login 
app.get("/login", (req, res) => {
  let state = false
  users.forEach(elem => {
    if (elem.state == true){
      res.status(200);
      res.json({id:elem.id , name:elem.name , type:elem.type , url:elem.url});
      state = true
    }
  })
  if (state == false){
    res.status(200);
    res.json("-1");
  }
 
});


// login pass name + password from client and & check if found Mail & Password 
app.post("/login", (req, res) => {
  const name = req.body.name
  const password = req.body.password

  let isTrue = false
  users.forEach(element => {
    if (element.name == name && element.password == password){
        res.status(200);
        res.json({id:element.id , name: element.name,type: element.type})
        element.state = true
        isTrue = true
    }
  });




// if not found name & pass in Array
if (isTrue == false) { 
  res.status(200);
  res.json("wrong");
}
  
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

app.post("/comment/" , (req , res) => {
 let obj = req.body
 Prodects.cars.forEach((element , i) => {
   if (obj.id == element.id){
    Prodects.cars[i].comments.push(obj.comment)
    console.log(Prodects.cars[i].comments);
   }
 });
 res.status(200);
 res.json(Prodects.cars[obj.id-1].comments);
 
});



app.get("/car/:id", (req, res) => {
  let id = req.params.id
  console.log(Prodects.cars[id-1].name);
   res.status(200);
  res.json(Prodects.cars[id-1]);
});



app.get("/part/:id", (req, res) => {
  let id = req.params.id
  console.log(Prodects.parts[id-1].name);
   res.status(200);
  res.json(Prodects.parts[id-1]);

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