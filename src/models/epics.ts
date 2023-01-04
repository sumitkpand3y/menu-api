import mongoose from "mongoose";



const epicsSchema = new mongoose.Schema( {
    
    title: {type:String, require:true},
    description: {type:String},
    status: {type:String},
    tags: {type:String},
    color: {type:String},
   
    createdAt: {type:Date},
    updatedAt: {type:Date},
  })

  const UserModel = mongoose.model("epic", epicsSchema)

  export default UserModel