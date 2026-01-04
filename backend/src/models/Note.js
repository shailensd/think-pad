import mongoose from "mongoose";

// Define the Note schema
// Model based on the schema for notes in the application

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // createdAt and updatedAt fields will be added automatically
);

const Note = mongoose.model("Note", noteSchema);

export default Note;