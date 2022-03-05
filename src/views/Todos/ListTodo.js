import React from "react";
import AddTodo from "./AddTodo";
import './listTodo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'MaKing Videos'},
            {id: 'todo3', title: 'Fixing bugs'},
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState ({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })

        toast.success('Delete Success!')
        
    }

    handEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save 
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            // //Log object to Console.
            // console.log("Before update: ", listTodosCopy[objIndex])

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            toast.success("update success!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (e) => {

        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    

    render() {
        // let listTodos = this.state.listTodo
        let  { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // console.log('>>>>>check empty', isEmptyObj);
        return (
            <>
                <p> App Todo </p>
                <div className="container">
                    
                    <div className="list-todo">
                        <AddTodo 
                            addNewTodo= {this.addNewTodo}
                        />
                        { listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                        <span className="title">{index + 1} - {item.title}</span>
                                        :
                                        <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input value={editTodo.title}
                                                    onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                /> 
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                        </>
                                        
                                        }
                                        <button className="edit"
                                            onClick={() => this.handEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                            'save' : 'edit'    
                                        }
                                            </button> 
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >delete</button>
                                    </div> 
                                )
                            }) 
                        }
                        
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;