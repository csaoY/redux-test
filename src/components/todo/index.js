import React,{Component} from 'react';
//import { Input ,Button,List} from 'antd';
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
function mapState(){

}
export default connect(mapState,null)(TODO)