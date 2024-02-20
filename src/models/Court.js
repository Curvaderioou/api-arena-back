import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Court = mongoose.model("Court", CourtSchema);

export default Court;
