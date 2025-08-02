import { Component } from "react";
import User from "./User";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }


    async componentDidMount(){
        const data = await fetch(
            "https://api.github.com/users/Piyush-codez0"
        );
        const user = await data.json();
        this.setState({ user });
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>About</h1>
                <img src={this.state.avatar_url} alt="" />
                <p>{count}</p>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}
                >
                    Like
                </button>
            </div>
        );
    }
}

export default About;