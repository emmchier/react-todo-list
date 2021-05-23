import React from 'react';
import { CustomBtn } from 'ui/customs/CustomBtn';
import { CustomFormField } from 'ui/customs/CustomFormField';

export const TodoForm = ({
    inputType,
    inputValue,
    inputName,
    inputOnChange,
    inputPlaceholder,
    btnTitle,
    btnClasses,
    btnType,
    onSubmit
}) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="alignX">
                <CustomFormField
                    formInputType={inputType}
                    formInputName={inputName}
                    formInputValue={inputValue}
                    formInputPlaceholder={inputPlaceholder}
                    onChange={inputOnChange}
                />
                <CustomBtn
                    btnTitle={btnTitle}
                    classes={btnClasses}
                    btnType={btnType}
                />
            </div>
        </form>
    )
}
