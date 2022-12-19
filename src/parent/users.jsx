import { Component } from 'react'
import User from '../child/user';
export default class Users extends Component{
    state = {
        userArray : [
            {id:1 , name: 'john' , age: 15},
            {id:2 , name: 'mohamed' , age: 25},
            {id:3 , name: 'felo' , age: 35},
            {id:4 , name: 'fady' , age: 45},
            {id:5 , name: 'tarek' , age: 55},
        ]
    }
    updateUser = (user) => {
        let newUserArray = this.state.userArray; // copy array
        let indexUser = newUserArray.indexOf(user);
        newUserArray[indexUser].age++;
        this.setState({userArray:newUserArray})
    }
    deleteUser = (userId) => {
        let newUserArray = this.state.userArray;
        // this.state.userArray.filter(
        //     (users) => {
        //         return users.id != userId;
        //     }
        // )
        console.log(`delete user ${userId}` );
        console.log(newUserArray);
        newUserArray = newUserArray.filter((users) => users.id !== userId);
        // this.props.userArray = newUserArray;
        this.setState({userArray:newUserArray})
    }
    render(){
        console.log("in users component");
        return(
            
            <div className='container'>
                <div className='row'>
                    {this.state.userArray.map((u) => 
                    
                    <User onUpdate={this.updateUser} onDelete={this.deleteUser} key={u.id} userDetails={u}/>
                    )}

                </div>

            </div>
        );
    }
}