import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    
<Router>
    <CssBaseline/>
    <div>
      <Route exact path='/' component={App} />
    </div>
</Router>
,document.getElementById('root'));
