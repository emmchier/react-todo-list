import { useMediaQueries } from 'hooks/useMediaQueries';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { actionTypes } from 'reducers/typesReducer';
import { CustomBtn } from './customs/CustomBtn';

export const Navbar = ({
    todos, 
    dispatch, 
    hideCompleted, 
    setHideCompleted
}) => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const {isMobile} = useMediaQueries();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDeleteAll = () => {
        dispatch({
            type: actionTypes.deleteAllTasks,
            payload: todos
        });
    }

    const handleComplete = () => setHideCompleted(!hideCompleted);

    const titleResCondition = hideCompleted ? 'Mostrar completadas' : 'Ocultar completadas';

    return (
        <nav className={
            scrollPosition > 0
                ? 'navbar fixed-top getShadow'
                : 'navbar fixed-top'}>
            <div className="container alignX pushAside">
                <NavLink
                    className={'navbar-brand'}
                    to="/">
                    Lets Todo It!
                </NavLink>
                <div className="nav__header-actions">
                    <CustomBtn
                        btnTitle={ !isMobile ? titleResCondition : '' }
                        classes={isMobile ? 'btn-show-completed btnFAB' : 'btn-show-completed btnNormal'}
                        onClick={handleComplete}
                        isIconLeftVisible={true}
                        btnIcon={hideCompleted ? 'visibility_off' : 'visibility'}
                    />
                    <CustomBtn
                        btnTitle={isMobile ? '' : 'Eliminar todo'}
                        classes={isMobile ? 'btn-delete-all btnFAB' : 'btn-delete-all btnNormal'}
                        onClick={handleDeleteAll}
                        isIconLeftVisible={true}
                        btnIcon={'delete'}
                    />
                </div>
            </div>
        </nav>
    )
}
