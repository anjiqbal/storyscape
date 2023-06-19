import  {useState} from 'react'
//import './storyUpload.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function StoryUpload() {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState('');

  const [text, setText] = useState('');
  const max_text_length = 40000;

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
    document.getElementById("count_message").innerHTML = remaining_text.toLocaleString() + " characters remaining";
  };
  return (
    <>

    <div className="col-sm-5 well">
      <form acceptCharset="UTF-8" action="" method="POST">
        <textarea readOnly className="form-control" id="text" name="text" maxLength="40000" placeholder="My story is about" rows="5" value={description} ></textarea>

      </form>

      <Button variant="primary" onClick={handleShow} className='edit-btn'>
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
              <Form.Label>Type your story</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={handleChange} />
              <span className="pull-right label label-default" id="count_message">{text.length.toLocaleString()} / {max_text_length.toLocaleString()}</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseSave} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>

  );

}

export default StoryUpload
