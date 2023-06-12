import React, {useState} from 'react'
import './storyUpload.css'

function StoryUpload() {
  const [text, setText] = useState('');
  const max_text_length = 40000;

  const handleChange = (event) => {
    const text_length = event.target.value.length;
    const remaining_text = max_text_length - text_length;
    setText(event.target.value);
    document.getElementById("count_message").innerHTML = remaining_text + " characters remaining";
  };
  return (
    <div>  
        <div className="col-sm-4 well">
        <form acceptCharset="UTF-8" action="" method="POST">
            <textarea className="form-control" id="storyText" name="text" 
               maxLength="40000" placeholder="Tell your story" rows="5" value={text} onChange={handleChange}></textarea>
            <span className="pull-right label label-default" id="count_message">{text.length} / {max_text_length}</span>
              {/* <br/>
            <button className="btn btn-info" type="submit">Post New Message</button> */}
        </form>
    </div>
      
    
    </div>
  )
}

export default StoryUpload