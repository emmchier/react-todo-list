import React from 'react';

import { useForm } from '../../hooks/useForm';
import { CustomBtn } from '../../ui/customs/CustomBtn';
import { CustomFormField } from '../../ui/customs/CustomFormField';
import { actionTypes } from '../../utils/types';

export const TodoAddTask = ({ dispatch }) => {

    const [ { desc }, handleInputChange, reset ] = useForm({
        desc: ''
    });

    const handleAddTask = (e) => {
        e.preventDefault();

        if ( desc.trim().length <= 0 ) { return; } 
        
        const newTask = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        };
        
        dispatch({
            type: actionTypes.addAction,
            payload: newTask
        });
        
        reset();
    }

    return (
        <form onSubmit={ handleAddTask } className="home__add-form">
            <div className="home__form-content alignX">
                <CustomFormField 
                    formInputType={ 'text' }
                    formInputName={ 'desc' }
                    formInputValue={ desc }
                    formInputPlaceholder={ 'Nueva tarea...' }
                    onChange={ handleInputChange }
                /> 
                <CustomBtn
                    btnTitle={ 'Agregar' }
                    classes={ 'btn-add btnNormal' }
                    btnType={ 'submit' }
                />
            </div>
        </form>
    )
}