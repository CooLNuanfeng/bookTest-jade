var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	bookName : String,
	bookImg: String,
	bookAuthor: String,
	bookPublisher : String,
	bookTime : Number,
	bookPrice : Number,
	bookInfo : String,
	meta :{
		createAt : {
			type : Date,
			default : Date.now()
		},
		updateAt : {
			type : Date,
			default : Date.now()
		}
	}
});

bookSchema.pre('save',function(next){
	if(this.isNew){
		this.createAt = this.updateAt = Date.now();
	}else{
		this.updateAt = Date.now();
	}
	next();
});


bookSchema.statics = {
	fetch : function(cb){
		return this.find({}).exec(cb);
	},
	getById :function(id,cb){
		return this.findOne({_id:id}).exec(cb);
	}
};

module.exports = bookSchema;