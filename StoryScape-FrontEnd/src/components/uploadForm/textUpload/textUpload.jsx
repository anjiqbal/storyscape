import React from 'react'
import './textUpload.css'

function TextUpload() {

  return (
    <div className="col-sm-4 well">
    <form accept-charset="UTF-8" action="" method="POST">
        <textarea className="form-control" id="text" name="text" 
      	 maxlength="200" placeholder="Please add a short description of your video" rows="5"></textarea>
        <span className="pull-right label label-default" id="count_message"></span>
      	{/* <br/>
        <button className="btn btn-info" type="submit">Post New Message</button> */}
    </form>
</div>
  )
}

export default TextUpload