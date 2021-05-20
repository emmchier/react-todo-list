import React, { useReducer } from 'react';

import { todoReducer } from '../../reducers/todoReducer';
import { TodoAddTask } from './TodoAddTask';
import { TodoItem } from './TodoItem';

const initialState = [{
    id: new Date().getTime(),
    desc: 'task 1',
    done: false
}];

export const TodoList = () => {

    const [ todos ] = useReducer( todoReducer, initialState );
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
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-sm col-7">
                    <h2>ADD TASK</h2>

                    <TodoAddTask />
                </div>
            </div>
        </>
    )
}
