const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
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
    tools: [{
        type: Schema.Types.ObjectId,
        ref: "Tool"
    }]
});

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
    }
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
 
