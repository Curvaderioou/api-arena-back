import mongoose from "mongoose";

const ArchiveSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  reservedDate: {
    type: Date,
    required: true,
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Court",
    required: true,
  },
});

const Archive = mongoose.model("Archive", ArchiveSchema);

export default Archive;
