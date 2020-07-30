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
    _owner: [{
        type: Schema.Types.ObjectId,
        ref: "Owner"
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

const Owner = mongoose.model("Owner", ownerSchema);

const Tool = mongoose.model("Tool", toolSchema);

module.exports = {
    Tool,
    Owner
};
 

// function getPrice(num) {
//     return (num/100).toFixed(2);
// }
// function setPrice(num) {
//     return num*100;
// }