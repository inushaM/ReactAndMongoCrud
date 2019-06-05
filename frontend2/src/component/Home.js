import React, {Component} from 'react';
import axios from 'axios'
import CourseTable from './CourseTable'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseList:'',
            message: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }


    submitHndler = (e) =>{
        axios.get('/getall')
            .then(response => {
                this.setState({
                    courseList: response.data
                })
            })
    }

    render() {
        return(
            <div className="container">
                {/*<h1>CRUD App with Hooks</h1>*/}
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>View users</h2>
                        <h2>{this.state.message}</h2>
                        <CourseTable course={this.state.courseList} />
                    </div>
                </div>
            </div>
        );
    }
}
