import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./uploadError.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";


function UploadError() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/uploadForm",{ state: { loggedIn: true } });
  }

  return (
    <>
      <div className="error-collection-wrapper">
        <header>
          <NavBar />
        </header>
        <div className="error-card">
          <Card className="error-text-center">
            <div className="error-header">
              <Card.Header>
                <h1 className="error-uploadText">Upload Failed!</h1>
              </Card.Header>
            </div>
            <div className="error-body">
              <Card.Body>
                <Card.Title>
                  <h2>There was an Issue Uploading Your Content.</h2>
                </Card.Title>
                <Card.Text>
                  <h3>Click the button below to go back to the upload page.</h3>
                </Card.Text>
                <Button className="errorButton" onClick={handleClick}>
                  Back to Upload.
                </Button>
              </Card.Body>
            </div>
          </Card>
          </div>
          <footer>
            <Footer />
          </footer>
        
      </div>
    </>
  );
}

export default UploadError;