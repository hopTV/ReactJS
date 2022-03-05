const initState = {
    users: [
        { id: 1, name: 'hợp'},
        { id: 2, name: 'học react'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case 'delete_user':
            console.log('>>> run into action', action)

            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state,users
            }
        case 'create_user':
            let id = Math.floor(Math.random()* 1000)
            let user = {id: id, name: `random - ${id}`}

            return {
                ...state, users: [...state.users, user]
            }

        default: 
            return state;
    }
    
}

export default rootReducer;