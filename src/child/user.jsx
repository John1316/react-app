import React , { Component } from 'react'
export default class User extends Component{
    state = {
    }
    render(){
        let {id, name , age} = this.props.userDetails;
        return(
            <>
                <div  className="card col-md-4">
                    <div className="card-body">
                        
                        <h1>User {name}</h1>
                        <p>age {age} </p>
                        
                        <button name="" id="" className="btn btn-info" onClick={
                            () => {this.props.onUpdate(this.props.userDetails)}
                        }>update</button>
                        <button name="" id="" className="btn btn-danger" onClick={
                            () => {this.props.onDelete(id)}
                        }>delete</button>
                    </div>
                    
                </div>
            </>
        )
    }
}