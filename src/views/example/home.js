import React from "react";
import { withRouter } from "react-router";
// import color from "../HOC/Color";
import image from '../../assets/images/home.jpg';

import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     console.log('check timeout >>>>')
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log('>>>check user', user)
        this.props.deleteUserRedux(user);

    }
    handleAddUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log('>>> check props redux:', this.props.dataRedux)
        let listUser = this.props.dataRedux;
        return(

           <>
                <div>
                    hello home!!
                </div>
                {/* <div>
                    <img src={image} />
                </div> */}
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}  
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                    
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleAddUser()}>add new</button>
                </div>
           </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        deleteUserRedux: (userId) => dispatch({type: 'delete_user', payload: userId}),
        addUserRedux: () => dispatch({type: 'create_user'})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Home));
// export default color(Home);