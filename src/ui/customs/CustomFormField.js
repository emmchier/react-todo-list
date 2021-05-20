import React from 'react';

export const CustomFormField = ({
    showFormHeader,
    formHeader, 
    showFormLabel, 
    formForLabel,
    formTitleLabel, 
    formInputType,
    formInputClasses,
    formInputId,
    formInputValue,
    formInputName,
    onSubmit,
    onChange,
    formInputPlaceholder,
    ariaDescribedby
}) => {
    return (
        <div className="form-group">
            {
                showFormHeader &&
                <h4 className="form-grup__header">{ formHeader }</h4>
            }
            {
                showFormLabel &&
                <label for={ formForLabel }>{ formTitleLabel }</label>
            }
            <input 
                type={ formInputType } 
                className={ formInputClasses } 
                id={ formInputId } 
                value={ formInputValue }
                name={ formInputName }
                onSubmit={ onSubmit }
                onChange={ onChange }
                placeholder={ formInputPlaceholder }
                autoComplete="off"
                aria-describedby={ ariaDescribedby }
                />
        </div>
    )
}
