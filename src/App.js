import React, {Component} from 'react';
import Federico from './Federico.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appName: 'Whatever'
    }
    this.changeAppName = this.changeAppName.bind(this)
  }
  changeAppName (newName) {
    this.setState({appName: newName})

  }

  render () {
    return (
      <div> 
          This is my app and its called {this.state.appName}
          <button onClick={()=>{this.changeAppName('Something Different')}}></button>
          <Federico data={this.state} />
      </div>
    )
  }


}




export default App;
