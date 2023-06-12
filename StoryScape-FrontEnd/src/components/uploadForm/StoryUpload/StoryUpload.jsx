import React from 'react'

function StoryUpload() {
  return (
    <div>  
        <div className="col-sm-4 well">
        <form accept-charset="UTF-8" action="" method="POST">
            <textarea className="form-control" id="storyText" name="text" 
               maxlength="40000" placeholder="Tell your story" rows="5"></textarea>
            <span className="pull-right label label-default" id="count_message"></span>
              {/* <br/>
            <button className="btn btn-info" type="submit">Post New Message</button> */}
        </form>
    </div>
      
    
    </div>
  )
}

export default StoryUpload