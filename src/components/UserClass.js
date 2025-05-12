import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userId: {
                name: "dummy",
                location: "default"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Pratikraj95642");
        const json = await data.json();
        console.log(json);
        this.setState({
            userId: json,
        });
    }
    render() {
        const{name, location, avatar_url}=this.state.userId;
        
        return (
        <div className="user-class">
            <img src={avatar_url} />
            <h1>Name: {name}</h1>
            <h2>location: {location}</h2>
            <h3>email: prateekraj95642@</h3>
        </div>
        );
        
    };
};
export default UserClass;