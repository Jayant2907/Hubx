import {useState} from 'react'

import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css";
import Graph from './Graph';

const App = () => {
  const [open,setOpen]=useState(false)
  return (
    <>
      <Button color="primary" onClick={()=>setOpen(true)}>
  Primary
</Button>
   <Modal show={open}>
   <Modal.Header>Hi</Modal.Header>
   <Modal.Body><Graph/></Modal.Body>
   <Modal.Footer>
     <Button color="primary" onClick={()=>setOpen(false)}>Close</Button>
   </Modal.Footer>
 </Modal>
 </>
  )
}

export default App;
