import React, { useState } from 'react';
import './index.less';
const renderButton = () => {
    return (
        <button className="btn btn-primary btn-ghost btn-multiple-border-stroke">
            <div className="btn-borders-group">
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
            </div>
            <div className="btn-borders-group">
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
            </div>
            <div className="btn-borders-group">
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
            </div>
            <span className="btn-text">Start</span>
        </button>
    )
}



export default renderButton;