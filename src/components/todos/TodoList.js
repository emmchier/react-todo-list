import { EmptyComponent } from 'components/empty/EmptyComponent';
import React from 'react';
import { TodoAddTask } from './TodoAddTask';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos, 
    dispatch, 
    hideCompleted
}) => {

    const showCompleted = hideCompleted ? todos.filter(task => !task.done) : todos;

    return (
        <>
            <div className="home__todoList">
                <div className="todoList__header pushAside">
                    <h3>Mis tareas ({todos.length})</h3>
                    <TodoAddTask
                        todoList={todos}
                        dispatch={dispatch}
                    />
                </div>
                {
                    showCompleted.length > 0
                    ? <ul 
                        className="
                            list-group-flush 
                            animate__animated 
                            animate__fadeIn 
                            animate__faster"
                        >
                        {
                            showCompleted.map((task, i) => (
                                <TodoItem
                                    key={task.id}
                                    index={i}
                                    task={task}
                                    dispatch={dispatch}
                                />
                            ))
                        }
                    </ul>
                    : <EmptyComponent />
                }
            </div>
           
        </>
    )
}
