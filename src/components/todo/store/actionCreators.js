import * as constants from './constants'
const changeList=(value)=>({
    type:constants.CHANGE_LIST,
    value
})
export const changeValue=(dispatch)=>{
    return dispatch(changeList('1234啊哦'))

}