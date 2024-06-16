import mongoose from "mongoose";
const ListingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inventory: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default Listing = mongoose.model("Listing", ListingSchema);
