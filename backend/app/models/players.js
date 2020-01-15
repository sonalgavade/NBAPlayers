//This will be all that is required to create records in our database. Once we define our Mongoose model, 
//it will let us handle creating, reading, updating, and deleting our nerds.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log("schema");
// season17_18 : {type : Number, required : true}
// , required : true gave problem in post method
var playersSchema = new Schema({
    Player : {type : String},
    Tm : {type : String},
    season17_18 : {type : Number}
});

// module.exports allows us to pass this to other files when it is called
 module.exports = mongoose.model('players', playersSchema);

// //without using schema another way to do this...........
// module.exports = mongoose.model('players', {
//     //another way to define same thing
//     //{id : String}
//     id : {type : String, default: ''},
//     Player : {type : String, default: ''},
//     team : {type : String, default: ''},
//     salary : {type : String, default: ''}
// });


//In the future, you can use the app folder to add more models, controllers, routes, and 
//anything backend (Node) specific to your app.