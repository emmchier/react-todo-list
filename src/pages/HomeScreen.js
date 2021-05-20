import React, { useReducer } from 'react';

import { todoReducer } from '../reducers/todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'task 1',
    done: false
}];

export const HomeScreen = () => {

    const [ todos ] = useReducer( todoReducer, initialState );
    console.log(todos);

    return (
        <div className="container">
            <h2>TODO LIST ({ todos.length })</h2>

            <ul className="home__todoList list-group list-group-flush">

                {
                    todos.map( (task, i) => (
                        <li
                            key={ task.id }
                            className="list-group-item"
                        >
                            { i + 1 } { task.desc }
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
