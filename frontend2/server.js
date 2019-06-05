const Bundler = require('parcel-bundler'),
    express = require('express'),
    mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/react-sample').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/api/messages', require('./app/routes/message.server.routes'));

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

//----------------------------------------------------------------------------------------------

let Subject = require('./app/models/Subject-model');
let Course = require('./app/models/Course-model');

const subjectRoute = express.Router();
const courseRoutes = express.Router();

app.use('/subjects' , subjectRoute);
app.use('/courses' , courseRoutes);


subjectRoute.route('/').get(function (req,res) {
    subject.find(function (err,subjects) {
        if(err){
            console.log(err);
        }else{
            res.json(subjects);
        }
    });
});

subjectRoute.route('/add').post(function (req,res) {

    let subject = new Subject(req.body);
    subject.save()
        .then(subject => {
            res.status(200).json({'subject' : 'subject added succcessfully'});
        })
        .catch(err => {
            res.status(500).send('adding new todo faild');
        });

});

courseRoutes.route('/findbyid/:id').get(function (req,res) {

    let id = req.param.id;

    course.findById(id , function (err,courses ) {

        if(err){
            console.log(err);
        }else{
            res.json(courses);
        }

    });

});


