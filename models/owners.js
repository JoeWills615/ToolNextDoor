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

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;