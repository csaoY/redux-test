import React,{Component} from 'react';
import {actionCreator} from './store'
import {connect} from 'react-redux'
class TODO extends Component{
  constructor(){
      super();
  }
  render(){
      return(
        <div>即使在</div>
      )
  }
}

export default connect(null,null)(TODO)