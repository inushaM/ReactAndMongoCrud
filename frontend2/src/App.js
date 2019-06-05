import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route , Link} from "react-router-dom";
import Create from './component/Create'
import Search from './component/Search'
import SearchResult from './component/SerchResult'
import Home from './component/Home'

class App extends Component{

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/Create'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Search'} className="nav-link">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/index'} className="nav-link">Index</Link>
                            </li>
                        </ul>
                    </div>
                    </nav>
                <switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Create" component={Create} />
                    <Route path="/Search" component={Search} />
                    <Route path="/SerchResult" component={SearchResult}/>
                </switch>
                </div>
            </Router>
        );
    }
}

export default App;
