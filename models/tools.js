const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = new mongoose.Schema({
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

const Tool = mongoose.model("Tool", toolSchema)

module.exports = Tool; 

// function getPrice(num) {
//     return (num/100).toFixed(2);
// }
// function setPrice(num) {
//     return num*100;
// }