import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import { CustomBtn } from '../../ui/customs/CustomBtn';
import { CustomFormField } from '../../ui/customs/CustomFormField';
import { actionTypes } from '../../utils/types';

export const TodoItem = ({ task, index, dispatch }) => {

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

    const handleCompleteTask = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            dispatch({
                type: actionTypes.completeTask,
                payload: {
                    id: task.id,
                    checked: true
                }
            });
        } else {
            dispatch({
                type: actionTypes.completeTask,
                payload: {
                    id: task.id,
                    checked: false
                }
            });
        }
      }

    return (
        <li
            className="home__todo-item list-group-item">
            <div className="home__todo-item-content alignX pushAside">
                <div className="home__item-name-container alignX">
                    <input 
                        type="checkbox" 
                        checked={ task.checked }
                        onChange={ (e) => handleCompleteTask(e)} />
                    <p 
                        className={ `home__todo-desc ${ task.done && 'checkedTask' }` }
                        onClick={ (e) => handleCompleteTask(e)}>
                        { index + 1 }. { task.desc }    
                    </p> 
                </div>
                <div className="home__item-actions-container alignX">
                    <CustomBtn
                        classes={ 'btn-edit btnFAB' }
                        onClick={ () => setEditVisible(true) }
                        isIconRightVisible={ true }
                        btnIcon={ 'edit' }
                    />
                    <CustomBtn
                        classes={ 'btn-delete btnFAB' }
                        onClick={ handleDeleteTask }
                        isIconRightVisible={ true }
                        btnIcon={ 'delete' }
                    />
                </div>
 
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
