const mongoose = required('mongoose');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
    name: {type: String, required:true},
    code: {type: String, required: true},
    passMark: {type: String, required: true},
    lectureIncharge: {type: String, required: true},
    subjects:[{type: mongoose.Schema.Types.ObjectId , ref : 'Subject'}]


});

module.exports = mongoose.model('Course',courseSchema);