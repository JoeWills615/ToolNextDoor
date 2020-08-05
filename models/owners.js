const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    // URL string for Thumbnail image
    picture: {
        type: String,
        default: ""
    },
    tools: [{
        type: Schema.Types.Mixed,
        ref: "Tool"
    }]
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;