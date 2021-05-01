import mongoose from "mongoose";
const cardsSchema = mongoose.Schema({
  imgUrl: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Cards = mongoose.model("Cards", cardsSchema);
export default Cards;
