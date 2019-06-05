const mongoose = required('mongoose');
const Schema = mongoose.Schema;


const subjectSchema = new Schema ({
    name:({type : String ,required : true}),
    descrption:({type : String , required: true}),
    amount:({type : Number , required: true})
})

module.export = mongoose.model('Subject',subjectSchema);