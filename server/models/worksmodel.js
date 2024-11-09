const { hash } = require('bcrypt');
let mongoose=require('mongoose');

let Workschema=new mongoose.Schema({
    username:{type:String,unique:true,require:true},
    email:{type:String,unique:true,require:true},
    password:{type:String,require:true},
    work:String,
    done:{
        type:Boolean,
        default:false
    }
})
let workmodel=mongoose.model("Workmodel",Workschema);

module.exports=workmodel