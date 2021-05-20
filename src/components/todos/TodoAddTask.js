import React from 'react';

import { CustomBtn } from '../../ui/customs/CustomBtn';
import { CustomFormField } from '../../ui/customs/CustomFormField';

export const TodoAddTask = () => {

    const handleAddTask = (e) => {
        e.preventDefault();
        console.log('Nueva tarea agregada');
    }

    return (
        <form onSubmit={ handleAddTask } className="home__add-form">
            <div className="home__form-content alignX">
                <CustomFormField 
                    formInputType={ 'text' }
                    formInputName={ 'desc' }
                    formInputPlaceholder={ 'Nueva tarea...' }
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