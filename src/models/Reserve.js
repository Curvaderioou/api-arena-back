import mongoose from "mongoose";

const ReserveSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  reservedDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Court",
    required: true,
  },
});

const Reserve = mongoose.model("Reserve", ReserveSchema);

export default Reserve;
