import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalForText() {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');
    const max_text_length = 200;
  
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function handleCloseSave() {
    setDescription(document.getElementById("exampleForm.ControlTextarea1").value);
    setShow(false);
        }
console.log(description);
  

const handleChange = (event) => {
    const text_length = event.target.value.length;
    const remaining_text = max_text_length - text_length;
    setText(event.target.value);
    document.getElementById("count_message").innerHTML = remaining_text + " characters remaining";
  };

    return (
      <>

      <div className="col-sm-4 well">
        <form acceptCharset="UTF-8" action="" method="POST">
          <textarea readOnly className="form-control" id="text" name="text" maxLength="200" placeholder="Please add a short description of your video" rows="5" value={text} onChange={handleChange}></textarea>
          <span className="pull-right label label-default" id="count_message">{text.length} / {max_text_length}</span>
          {/* <br/>
          <button className="btn btn-info" type="submit">Post New Message</button> */}
        </form>

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
        </div>
      </>

    );

  }
  
  export default ModalForText;