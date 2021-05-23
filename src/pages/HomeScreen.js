import React, { useEffect, useReducer, useState } from 'react';
import { TodoList } from 'components/todos/TodoList';
import { Navbar } from 'ui/Navbar';
import { todoReducer } from 'reducers/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const HomeScreen = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    console.log(todos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const [hideCompleted, setHideCompleted] = useState(false);

    return (
        <>
            <Navbar
                todos={todos}
                dispatch={dispatch}
                hideCompleted={hideCompleted}
                setHideCompleted={setHideCompleted}
            />
            <div className="container">
                <TodoList
                    todos={todos}
                    dispatch={dispatch}
                    hideCompleted={hideCompleted}
                />
            </div>
        </>
    )
}
