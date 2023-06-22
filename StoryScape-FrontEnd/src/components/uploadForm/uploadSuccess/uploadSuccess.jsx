import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./uploadSuccess.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";

function UploadSuccess() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      <div className="success-collection-wrapper">
        <header>
          <NavBar />
        </header>
        <div className="success-card">
          <Card className="text-center">
            <div className="success-header">
              <Card.Header>
                <h1 className="uploadText">Upload Successful!</h1>
              </Card.Header>
            </div>
            <div className="success-body">
              <Card.Body>
                <Card.Title>
                  <h2>Your Content is Now Available</h2>
                </Card.Title>
                <Card.Text>
                  <h3>Click the button below to go back to the home page.</h3>
                </Card.Text>
                <Button className="successButton" onClick={handleClick}>
                  Homepage.
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

export default UploadSuccess;
