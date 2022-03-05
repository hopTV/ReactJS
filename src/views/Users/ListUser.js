import React from "react";
import axios from "axios";
import './ListUser.scss';
import {withRouter} from 'react-router-dom';

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    async componentDidMount() {
        //c1: sử dụng promis
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res => {
        //     console.log('>>> check res:', res)
        // })
         
        // c2: sử dụng async await (bất đồng bộ)
        let res = await axios.get('https://reqres.in/api/users?page=1')
        // console.log('>>> check res:', res.data.data)
        this.setState ({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {
        // console.log('>>check user', this.props)
        this.props.history.push(`/user/${user.id}`)

    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="listUser">
                <div className="title">
                    Fetch all list User
                </div>
                <div className="List-user-content">
                    {listUser && listUser.length > 0 && 
                        listUser.map((item, index) => {
                            return (
                                <div className="list-user-child" key={item.id}
                                    onClick= {() => this.handleViewDetail(item)}
                                >
                                    
                                    { index + 1 } - { item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);