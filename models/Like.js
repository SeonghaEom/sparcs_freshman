var mongoose = require("mongoose");


// schema
var likeSchema = mongoose.Schema({
  title:String,
  like:Number,
},{
  toObject:{virtuals:true}
});

// model & export
var Like = mongoose.model("like", likeSchema);

var dongcheuk = new Like;
var.title = "dongcheuk";
var.like = 0;

module.exports = Like;