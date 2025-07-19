import mongoose, { Document, Model } from "mongoose";

export interface MessageType extends Document {
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    text?: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId, //this will store the id of the user who is sending the message along with the message and other details
        ref:"User",// this is the reference to the user model
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    //these below are not required true because we can send a message without an image or text or both or none of them; having required true would mean that we need to send both image and text all times
    text:{
        type:String,
    },
    image:{
        type:String,
    }
},
{timestamps:true}
);

const Message:Model<MessageType>=mongoose.model<MessageType>("Message", messageSchema);

export default Message;