import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import { CustomBtn } from '../../ui/customs/CustomBtn';
import { CustomFormField } from '../../ui/customs/CustomFormField';
import { actionTypes } from '../../utils/types';

export const TodoItem = ({task, index, dispatch}) => {

    const [ { desc }, handleInputChange, reset ] = useForm({
        desc: ''
    });

    const [editVisible, setEditVisible] = useState(false);

    const handleDeleteTask = () => {

        dispatch({
            type: actionTypes.deleteTask,
            payload: task.id
        });
    }

    const handleCompleteTask = () => {

        dispatch({
            type: actionTypes.completeTask,
            payload: task.id
        });
    }

    const handleEditTask = (e) => {
        e.preventDefault();

        if ( desc.trim().length <= 0 ) { return; } 
        
        dispatch({
            type: actionTypes.editTask,
            payload: {
                id: task.id,
                desc: desc
            }
        });
        reset();
        setEditVisible(false);
    }

    return (
        <li
            className="home__todo-item list-group-item">
            <div className="home__todo-item-content alignX pushAside">
                <p 
                    className={ `home__todo-desc ${ task.done && 'checkedTask' }` }
                    onClick={ handleCompleteTask }>
                    { index + 1 }. { task.desc }    
                </p>    
                <CustomBtn
                    btnTitle={ 'Edit' }
                    classes={ 'btn-edit btnNormal' }
                    onClick={ () => setEditVisible(true) }
                />
                <CustomBtn
                    btnTitle={ 'Borrar' }
                    classes={ 'btn-delete btnNormal' }
                    onClick={ handleDeleteTask }
                />
            </div>
            {
                editVisible &&
                <form onSubmit={ handleEditTask } className="home__edit-form">
                <div className="home__form-edit alignX">
                    <CustomFormField 
                        formInputType={ 'text' }
                        formInputName={ 'desc' }
                        formInputValue={ desc }
                        formInputPlaceholder={ 'Cambiar nombre...' }
                        onChange={ handleInputChange }
                    /> 
                    <CustomBtn
                        btnTitle={ 'Guardar' }
                        classes={ 'btn-save-edit btnNormal' }
                        btnType={ 'submit' }
                    />
                </div>
            </form>
            }
        </li>
    )
}
