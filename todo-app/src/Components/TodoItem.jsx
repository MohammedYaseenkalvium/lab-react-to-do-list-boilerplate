 import React from "react"

export default class TodoItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        let {e,i,updateItem,deleteItem} = this.props
        return(
            <div key={i}>
                <input type="text" value={e} className='space' onChange={(event)=>{
                  updateItem(event.target.value,i)
                }}/>
                <button onClick={()=>{
                    deleteItem(i)
                }}>DELETE ❌</button>
              </div>
        )
    }
}