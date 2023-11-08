const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true       
    },
    longUrl: {
        type: String,
        required: true        
    },
    shortUrl: {
        type: String,
        required: true       
    },
    clicks: {
        type: Number,
        required:true,
        default: 0
    }
},{timestamps: true});

module.exports = mongoose.model("Url", UrlSchema);