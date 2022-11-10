import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>
            This is react app that helps to leave feedback about product or
            service
          </p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
