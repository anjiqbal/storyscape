import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './textUpload.css';
import ModalForText from './Modal/Modal';

function TextUpload() {
  const [text, setText] = useState('');
  const max_text_length = 200;

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
        <ModalForText/>
      </div>
    </>
  );
}

export default TextUpload;