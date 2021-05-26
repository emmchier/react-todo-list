import React from 'react';

import EmptyIcon from 'assets/icon-empty.svg';

export const EmptyComponent = () => {
    return (
        <>
            <div className="
                row 
                empty__container
                animate__animated 
                animate__fadeIn 
                animate__faster
                centerMiddle">
                <div className="empty__content">
                    <img src={ EmptyIcon } alt="icon representing empty list" />
                    <p>Tus tareas aparecerán aquí</p>
                </div>
            </div>
        </>
    )
}
