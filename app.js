const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true});

const fruitschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating : Number,
    review: String
});

const model = mongoose.model("Fruit",fruitschema);


const fruit = new model({
    name:"banana",
    rating:4,
    review:"good taste"
});
//fruit.save();


model.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
       
    }
});



// model.updateOne({ name:"banana" }, { name:"apple" });

// model.deleteOne({name:"banana"});
model.deleteMany({ rating:4,function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("deleteed !");
    };
}  
});