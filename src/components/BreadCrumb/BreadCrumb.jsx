import React from 'react';
import './BreadCrumb.scss';

const BreadCrumb = () => {
    return (
        <div className="breadcrumbs">
            <ul className='list-unstyled'>
                <li><a href="#">Home</a></li>
                <li className='seperator'>/</li>
                <li><a href="#" className='active'>Gold</a></li>
            </ul>
        </div>
    )
}

export default BreadCrumb
