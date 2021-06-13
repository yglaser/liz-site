import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';


//import './_custom.scss';

global.jQuery = require('jquery');
require('bootstrap');

render(
<div>
<h1>hola liz </h1>
 <App/>
</div>,

document.getElementById('app')
)

