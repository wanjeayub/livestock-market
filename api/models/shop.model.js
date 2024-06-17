import mongoose from "mongoose";

const ShopSchema = mongoose.Schema({}, { timestamps: true });
export const Shop = mongoose.model("Shop", ShopSchema);
