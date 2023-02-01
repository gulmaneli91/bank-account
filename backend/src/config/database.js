const mongoose =require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.messages.general.required = "The atribute '{PATH}'is required."
mongoose.Error.messages.Number.min= "The '{VALUE}'declared is less then  minimum allowed '{MIN}'."
mongoose.Error.messages.Number.max= "The '{VALUE}'declared is more then maximun allowed '{MAX}'."
mongoose.Error.messages.Number.enum="'{VALUE}' is not valid for atribute '{PATH}'."
