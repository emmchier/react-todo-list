import React, { useEffect, useReducer } from 'react';

import { todoReducer } from '../../reducers/todoReducer';
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

    return (
        <>
            <h2>TODO LIST ({ todos.length })</h2>
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
