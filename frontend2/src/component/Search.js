import React, {Component} from 'react';
import axios from 'axios'
import Create from "./Create";
import SearchResult from "./SerchResult";
import {BrowserRouter as Router, Route , Link} from "react-router-dom";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search : ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }


    submitHndler = (e) =>{
        this.props.history.push({
            pathname : '/SerchResult',
            state : {detail : this.state}
        })
    }

    render() {
        return(
            <div className="container">
                <div className="panel-heading">
                    <h3>Search course</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.submitHndler}>
                        <table>
                            <tr>
                                <th>Search : </th>
                                <td><input type="text" name="search"  value={this.state.search} onChange={this.changeHandler} /> </td>
                            </tr>
                        </table>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}
