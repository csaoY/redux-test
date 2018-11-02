import React,{Component} from 'react';
import {actionCreators} from './store'
import {connect} from 'react-redux'
class TODO extends Component{
  constructor(){
      super();
      console.log(this)
  }
  render(){
      return(
        <div>即使在{this.props.list}
            <button onClick={this.props.changeValue}>点击改变</button>
        </div>
      )
  }
}
const mapState=(state)=>({
    list:state.getIn(['todo', 'list'])
})
const mapDispatch=(dispatch)=>({
  changeValue(){dispatch(actionCreators.changeValue)}

})

export default connect(mapState,mapDispatch)(TODO)