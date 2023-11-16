import React from 'react';
import Button from 'react-bootstrap/Button';
import './CustomIconButton.scss'


const CustomIconButton = (props) => {
  return (
    <div>
      <Button className='custom-icon-button' variant="primary">
        <img src={props.src} alt="" className='img-fluid' />
        {props.name}
      </Button>
    </div>
  )
}

export default CustomIconButton
