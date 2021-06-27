import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';


//import './_custom.scss';

global.jQuery = require('jquery');
require('bootstrap');

render(
<div>

 <App/>
</div>,

document.getElementById('app')
)

