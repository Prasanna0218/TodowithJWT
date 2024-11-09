let express=require('express')
require('dotenv').config();
let mongoose=require('mongoose');
let workmodel=require('./models/worksmodel')
let cors=require('cors')
let bcrypt=require('bcrypt');
let jwt=require('jsonwebtoken')
let app=express();

//middlewares
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://prasanna:gcoDVsLuxndSidAq@cluster0.jmy0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log("Database connected successfully!");
    app.listen(process.env.PORT,()=>{
        console.log(`Server runs on port ${process.env.PORT}`)
    });
})
.catch(err=>console.log(err))

//routes:-

//register route
app.post('/register',async (req,res)=>{
    let {username,email,password}=req.body;
    let hashedpassword=await bcrypt.hash(password,10);
    try {
        await workmodel.create({
            username: username,
            email: email,
            password: hashedpassword
        });
        res.status(200).json({message:"Data stored successfully"});

    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({message:`Userdetails already exists!`});
        } else {
            res.status(500).json({message:"Data not stored. An error occurred!"});
        }
    }
})

//login route
app.post('/login',async (req,res)=>{
    let {email,password}=req.body;
    let user=workmodel.findOne({email:email})
    if(!user)
    {
        res.status(404).json({message:"User not Found!"});
    }
    let ismatched=await bcrypt.compare(password,hashedpassword);
    if(!ismatched)
    {
        res.status(401).json({message:"Password is Incorrect"});
    }
    else{
        let token=jwt.sign({email},process.env.secret_key,{expiresIn:"15d"})
        console.log(token);
    }
})