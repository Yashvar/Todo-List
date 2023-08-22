import express from "express";
import bodyParser from "body-parser";

const app = express();
const port =3000;

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
const tasks=[];
const tasksWork =[];


app.get("/" ,(req,res)=>{
  if (tasks.length >0) {
    res.render("index.ejs",{
      all_tasks : tasks
    });
  }
  else{
    res.render("index.ejs");
  }

  
  
});

app.get("/home",(req,res)=>{
  if (tasks.length >0) {
    res.render("index.ejs",{
      all_tasks : tasks
    });
  }
  else{
    res.render("index.ejs");
  }
});

app.get("/work",(req,res)=>{
  if (tasksWork.length >0) {
    res.render("work.ejs",{
      all_tasks : tasksWork
    });
  }
  else{
    res.render("work.ejs");
  }
});

app.post("/new/work",(req,res)=>{
  const data = req.body;
  const t = data.newtask;
  console.log(data.vehicle1);
  if (t.length>0){
    tasksWork.push(t);
  }
  res.redirect("/work");
});

app.post("/new/home",(req,res)=>{
  const data = req.body;
  const t = data.newtask;
  console.log(t);
  if (t.length>0){
    tasks.push(t);
  }
  res.redirect("/home");
})




app.post('/delete', (req, res) => {
  const index = req.body.index;

  
  const id =req.body.id;
  //console.log(id);
  if (id === "H"){
    tasks.splice(index, 1);
    res.redirect('/');
  }

  if (id === "W"){
    tasksWork.splice(index, 1);
    res.redirect('/work');
  }
  
});




app.listen(port,() =>{
  console.log(`Server Listening to port ${port}`);
})