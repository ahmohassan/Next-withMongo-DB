import mongoose from "mongoose";

const storySchema =mongoose.Schema(
    { 
        title: {type :String,required:true},
        content: {type :String,required:true},
    },
    {
        timestamp:true
    }
)

const strory = mongoose.models.strory || mongoose.model('strory',storySchema)

export default strory