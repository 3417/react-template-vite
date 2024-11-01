import React from 'react';
import ErrorJpg from '../../assets/images/404.jpg';
import './NotFound.less'
const NotFound = () => {
    return (
        <>
            <div className='page_error'>
                <img src={ErrorJpg} alt="" className='error_img'/>
                <p className='error_text'></p>
            </div>
        </>
    )
}


export default NotFound;