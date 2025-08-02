import {Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    render(){
        const {name} = this.state;
        return(
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
}

export default User;