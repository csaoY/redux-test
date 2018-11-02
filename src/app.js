import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Todo from './components/todo'
//import {changeInputAction,submitAction,delAction,initStateAction} from '../store/actionCreators'
class App extends Component {
    constructor(){
    super();

    }

    render(){
        return(
            <Provider store={store}>
                <div>hhaskdgh
              <Todo/>
               </div>
            </Provider>

        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
