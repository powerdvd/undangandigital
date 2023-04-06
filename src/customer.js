import React, { useState } from 'react';
import {Form, Button, Table, Modal} from "react-bootstrap"
function Tabel() {
  
        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
        return(
            <div className='container'>
           <Button variant="success" className={'btn-block'} onClick={handleShow}>
        Tambah Barang
        
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
            <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th style={{width: '5%'}}>#</th>
                <th>Item</th>
                <th>Grup</th>
                <th>Harga</th>
                <th>Stok Awal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>4500</td>
                <td>122</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>300</td>
                <td>80</td>
              </tr>
            </tbody>
          </Table> 
          
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
          </div>
          
          
        )
        
}
export default Tabel;