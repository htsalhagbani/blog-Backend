import express from "express";
const app=express();

app.use(express.json());

const port=8084;

 let array=[];
 let signup=[];
app.post('/blog',(req,res)=>{
    const username=req.body.username;
    const title=req.body.title;
    const blog=req.body.blog;
    const blogs={username,title,blog};
    array.push(blogs);
    res.json(blogs);
})

app.get('/blog',(req,res)=>{
    res.json(array);
})

app.patch('/blog/:id',(req,res)=>{
let userid= parseInt(req.params.id);
let user=array[userid];
const {username,title,blog}=req.body;
user.username=username;
user.title=title;
user.blog=blog;
res.json(user);
})

app.delete('/blog/:id',(req,res)=>{
    let userid=parseInt(req.params.id);
    let user =array[userid];
    array.splice(userid,1);
    res.json(user);
})


app.post('/signup',(req,res)=>{
 const {username,password,age}=req.body;
 let data={username,password,age};
 signup.push(data);
 res.json(data);
})

app.get('/signup',(req,res)=>{
    res.json(signup);
})

app.post('/login',(req,res)=>{
    const{username,password}=req.body;
    const userfind=signup.find(item=>item.username === username && item.password === password)
    if(userfind){
        res.send('login sucess')
    } else{
        res.send('faild Erorr information not correct !!!')
    }
})

app.listen(port,()=>{

})