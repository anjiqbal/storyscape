import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalForText() {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function handleCloseSave() {
    setDescription(document.getElementById("exampleForm.ControlTextarea1").value);
    setShow(false);
        }
console.log(description);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            EDIT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalForText;