import React, { Component } from 'react'
import Navbar from './components/Navbar'
class App extends Component {
    state = {
        task: {
            title: 'hola liz',
            done: true
        }
    }
    handleClick = ()=> {
        const task = this.state.task
        task.done = !task.done
        this.setState({task})
    }
    render() {
        return (
            <div>
             <Navbar/>
            </div>
        )
    }
}
export default App;