import React from 'react'
import Form from 'react-bootstrap/Form';
import './SearchBox.scss'

const SearchBox = () => {
  return (
    <div className='search-box-show'>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Type to search here..." />
      </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBox
