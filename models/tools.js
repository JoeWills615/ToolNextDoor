const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const toolSchema = new mongoose.Schema({
    owners: [{
        type: Schema.Types.Mixed,
        ref: "Owner",
        //default: []
    }],
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // URL string for Thumbnail image
    picture: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    owners: {
        type: String,
        required: true,
        default: ""
    }
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
 
