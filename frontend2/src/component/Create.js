import React, {Component} from 'react';
import axios from 'axios'

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            code : '',
            passMark : '',
            lectureIncharge : ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }


    submitHndler = (e) =>{
        axios.post('/insert',this.state)
            .then(response => {
                if(response.data !== ''){
                    alert("Successfully saved")
                }else {
                    alert("save error")
                }
        })
    }

    render() {
        return(
            <div className="container">
                <div className="panel-heading">
                    <h3>Add new course</h3>
                </div>
                <div className="panel-body">
                <form onSubmit={this.submitHndler}>
                    <table>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Name : </label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Code :</label>
                                    <input type="text" name="code" value={this.state.code} onChange={this.changeHandler} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Pass Mark : </label>
                                    <input type="text" name="passMark" value={this.state.passMark} onChange={this.changeHandler} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Lecture Incharge : </label>
                                    <input type="text" name="lectureIncharge" value={this.state.lectureIncharge} onChange={this.changeHandler} />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button type="submit">Create</button>
                </form>
                </div>

            </div>
            );
    }
}
