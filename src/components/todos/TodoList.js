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

    console.log(todos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos));
    }, [todos]);
    
    const handleDeleteAll = () => {
      
        dispatch({
            type: actionTypes.deleteAllTasks,
            payload: todos
        });
    }  

    const [hideCompleted, setHideCompleted] = useState(false);

    const showCompleted = hideCompleted ? todos.filter( task => !task.done) : todos;

    const handleComplete = () => setHideCompleted(!hideCompleted);

    return (
        <>
            <div className="home__header-container alignX pushAside">
                <h2>Mis tareas ({ todos.length })</h2>
                <div className="home__header-actions">

                    <CustomBtn
                        btnTitle={ 
                            hideCompleted
                            ? 'Mostrar completadas'
                            : 'Ocultar completadas'
                        }
                        classes={ 'btn-show-completed btnNormal' }
                        onClick={ handleComplete }
                    />

                    <CustomBtn
                        btnTitle={ 'Borrar todo' }
                        classes={ 'btn-delete-all btnNormal' }
                        onClick={ handleDeleteAll }
                    />

                </div>
            </div>
            
            <div className="row">
                <div className="col-sm col-7">
                    <ul className="home__todoList list-group list-group-flush">
                        {
                            showCompleted.map( (task, i) => (
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
