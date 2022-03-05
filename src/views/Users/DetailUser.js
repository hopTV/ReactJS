import React from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";

class DetailUser extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        // console.log('>>>  check id:', this.props.match.params.id)
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            // console.log('>>>>check res: ', res.data.data)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
        
    }
    handleBack = () => {
        this.props.history.push('/user')
    }

    render() {

        // console.log('>>>check props:', this.props)
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;

        return (
            <>
                <div> hello Detail User with id: {this.props.match.params.id}</div>

                {isEmpty === false && 
                <>
                    <div>User's Name: {user.first_name} - {user.last_name}</div>
                    <div>User's email: {user.email}</div>
                    <div>
                        <img src={user.avatar} />
                    </div>
                    <div>
                        <button type="button" onClick={() => this.handleBack()}>Back</button>
                    </div>
                </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);