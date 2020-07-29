const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // URL string for Thumbnail image
    picture: {
        type: String,
        default: ""
    },
    tools: {
        type: Array,
        required: true
    }
});

const Owner = mongoose.model("Tool", ownerSchema)

module.exports = Owner; 