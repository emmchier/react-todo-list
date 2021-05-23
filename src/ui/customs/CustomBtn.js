import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CustomBtn = ({
    onClick,
    btnTitle,
    isHover,
    classes,
    to,
    btnIcon,
    isIconLeftVisible,
    isIconRightVisible,
    btnType,
    btnTarget,
    isLink
}) => {

    const [hover, setHover] = useState(true);

    return (
        !isLink
            ?
            <button
                className={
                    hover
                        ? `hover-active ${classes}`
                        : `${classes}`
                }
                onMouseEnter={() => { setHover(isHover) }}
                onClick={onClick}
                type={btnType}
                target={btnTarget}>
                {isIconLeftVisible && <i className="material-icons btn-icon"> {btnIcon} </i>}
                {btnTitle}
                {isIconRightVisible && <i className="material-icons btn-icon"> {btnIcon} </i>}
            </button>
            :
            <Link
                className={
                    hover
                        ? `hover-active ${classes}`
                        : ` ${classes}`
                }
                onMouseEnter={() => { setHover(isHover) }}
                onClick={onClick}
                to={to}
                type={'button'}
                target={btnTarget}>
                {isIconLeftVisible && <i className="material-icons btn-icon"> {btnIcon} </i>}
                {btnTitle}
                {isIconRightVisible && <i className="material-icons btn-icon"> {btnIcon} </i>}
            </Link>
    )
}
