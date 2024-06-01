import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://indravip3:indraKP77@cluster0.nxgpqcn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}