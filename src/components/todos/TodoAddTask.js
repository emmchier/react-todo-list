import React from 'react';
import { useForm } from 'hooks/useForm';
import { actionTypes } from 'reducers/typesReducer';
import { TodoForm } from './TodoForm';

export const TodoAddTask = ({ dispatch }) => {

    const [{ desc }, handleInputChange, reset] = useForm({ desc: '' });

    const handleAddTask = (e) => {
        e.preventDefault();
        if (desc.trim().length <= 0) { return; }
        const newTask = {
            id: new Date().getTime(),
            desc: desc,
            done: false,
            checked: false
        };
        dispatch({
            type: actionTypes.addTask,
            payload: newTask
        });
        reset();
    }
    
    return (
        <TodoForm
            inputType={'text'}
            inputValue={desc}
            inputName={'desc'}
            inputOnChange={handleInputChange}
            inputPlaceholder={'Nueva tarea...'}
            btnTitle={'Agregar'}
            btnClasses={'btn-add btnNormal'}
            onSubmit={handleAddTask}
        />
    )
}