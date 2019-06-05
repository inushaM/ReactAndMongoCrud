const Course = required('../modules/Course');

var CourseController = function() {

    this.insert = (data) =>{
        return new Promise((resolve , reject)=> {

            const course = new Course({
                name:data.name,
                code:data.code,
                passMark:data.passMark,
                lectureIncharge:data.lectureIncharge
            });

            course.save().then(()=>{
                resolve({status:200,message:"course added",course:course})
            }).catch(err=>{
                reject({status:500,message:"Error"+err});
            });
        });

    }

    this.getOne = (id) =>{
        return new Promise(((resolve, reject) => {
            Course.find({_id:id}).exec().then(data => {
                resolve({status:200, data: data});
            }).catch(err=>{
                reject({status: 500, message: "Error:-" + err});
            });
        }));
    }
}