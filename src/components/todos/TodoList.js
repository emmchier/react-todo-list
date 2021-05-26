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
                <div className="todoList__header">
                    <div className="row pushAside">
                        <div className="col-sm col-md-6">
                            <h3>Mis tareas ({todos.length})</h3>
                        </div>
                        <div className="col-sm col-md-6">
                            <TodoAddTask
                                todoList={todos}
                                dispatch={dispatch}
                            />
                        </div>
                    </div>
                </div>
                <ul className="list-group-flush">
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
            </div>
           
        </>
    )
}
