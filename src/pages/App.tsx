import React from "react";
import {
  BrowserRouter as Router, IndexRoute,
  withRouter,
} from "react-router-dom";
import './App.less'
@withRouter
class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <Router>
      <div className='app'>
          Hello
      </div>
      // </Router>
    )
  }
}

export default App