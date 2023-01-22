import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is About Page</h1>
        <p>This is the About page of the feedback app</p>
        <p>Versio: 1.0.0</p>
        <p><Link to="/">Back to Feedback Form</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage
