//import axios from 'axios'
import constants from './constants'
export const changeList=(type,value)=>({
    type:constants.CHANGE_LIST,
    value
})