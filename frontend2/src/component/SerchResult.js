import React, {Component} from 'react';
import axios from 'axios'

export default class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            code : '',
            passMark : '',
            lectureIncharge : '',
            search : this.props.location.state.detail.search
        }
    }

    changeHandler(e){
        this.setState({[e.target.name] : e.target.value})
    }


    submitHndler(e){
        axios.post('/getbytext',this.state.search)
            .then(response => {
                if(response.data !== ''){
                    this.setState({
                        name : response.data.name ,
                        code : response.data.code,
                        passMark : response.data.passMark,
                        lectureIncharge : response.data.lectureIncharge
                    })
                }else {
                    alert("data error")
                }
            })
    }

    render() {
        return(
            <div className="container">
                <div className="panel-heading">
                    <h3>Search Result</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.submitHndler}>
                        <table>
                            <tr>
                                <th>Name : </th>
                                <td> {this.state.name}</td>
                            </tr>
                            <tr>
                                <th>Code : </th>
                                <td> {this.state.code}</td>
                            </tr>
                            <tr>
                                <th>Pass Mark : </th>
                                <td> {this.state.passMark}</td>
                            </tr>
                            <tr>
                                <th>Lecture Incharge : </th>
                                <td> {this.state.lectureIncharge}</td>
                            </tr>
                        </table>
                    </form>
                </div>

            </div>
        );
    }
}
