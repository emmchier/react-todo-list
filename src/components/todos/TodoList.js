import React, { useEffect, useReducer, useState } from 'react';

import { todoReducer } from '../../reducers/todoReducer';
import { CustomBtn } from '../../ui/customs/CustomBtn';
import { actionTypes } from '../../utils/types';
import { TodoAddTask } from './TodoAddTask';
import { TodoItem } from './TodoItem';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoList = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    console.log(todos);

    const [stateTitle, setStateTitle] = useState('Ocultar Completadas');
    const [filterTodos, setFilterTodos] = useState([]);

    const handleFilter = () => {
        if (stateTitle === 'Ocultar Completadas') {
            setFilterTodos(todos.filter( task => task.done === false));
            setStateTitle('Mostrar Completadas');
        } else if (stateTitle === 'Mostrar Completadas') {
            setFilterTodos(todos.filter( task => task.done === true));
            setStateTitle('Ocultar Completadas');
        } else {
            setFilterTodos(filterTodos);
        }
        dispatch({
            type: actionTypes.hideCompleteTasks,
            payload: filterTodos
        });
    }

    const handleDeleteAll = () => {
      
        dispatch({
            type: actionTypes.deleteAllTasks,
            payload: todos
        });
    }   

    return (
        <>
            <div className="home__header-container alignX pushAside">
                <h2>Mis tareas ({ todos.length })</h2>
                <div className="home__header-actions">

                    <CustomBtn
                        btnTitle={ 'Borrar todo' }
                        classes={ 'btn-delete-all btnNormal' }
                        onClick={ handleDeleteAll }
                    />
                    <CustomBtn
                        btnTitle={ stateTitle }
                        classes={ 'btn-show-checked btnNormal' }
                        onClick={ handleFilter }
                    />

                </div>
            </div>
            
            <div className="row">
                <div className="col-sm col-7">
                    <ul className="home__todoList list-group list-group-flush">
                        {
                            todos.map( (task, i) => (
                                <TodoItem
                                    key={ task.id }
                                    index={ i }
                                    task={ task }
                                    dispatch={ dispatch }
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-sm col-7">
                    <h2>ADD TASK</h2>

                    <TodoAddTask 
                        todoList={ todos }
                        dispatch={ dispatch } 
                    />
                </div>
            </div>
        </>
    )
}
