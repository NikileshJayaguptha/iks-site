import React from 'react'
import "./paperpresentation.css"

export default function Paperpresentation() {
  return (
    <div className='paperwrapper1'>
    <section className="paperwrapper">

      <section className="aboutsection">
        <h2 className="abtssntitle">Conference Themes</h2>

        <p className="abouttext">
          <strong>1.</strong> Integrating Ancient Wisdom with Modern Learning<br />
          <strong>2.</strong> Yoga, Ayurveda and Well-being in Education<br />
          <strong>3.</strong> Tamil Literature and Knowledge Transmission<br />
          <strong>4.</strong> Mental Sciences and Psychology<br />
          <strong>5.</strong> Art, Music and Architecture in Learning<br />
          <strong>6.</strong> Vedic Mathematics and Astronomy from Ancient India<br />
          <strong>7.</strong> Education with Indian Roots
        </p>
      </section>
      <section className="aboutsection">
          <h2 className="abtssntitle">Prizes</h2>

          <p className="abouttext">
            The conference will recognize outstanding paper presentations with the following prizes:
            <br /><br />
            🥇 <strong>First Prize:</strong> ₹3000<br />
            🥈 <strong>Second Prize:</strong> ₹2000<br />
            🥉 <strong>Third Prize:</strong> ₹1000
          </p>
        </section>
        <section className="aboutsection">
        <h2 className="abtssntitle">Registration</h2>
        <p className="abouttext">
         Participants can register for the Paper Presentation online. Authors are required to submit an abstract first. The full paper submission link will be shared through the acceptance email after abstract review. </p>
      </section> 
      <table className="dates-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Abstract Submission Deadline</td>
      <td>31st January 2026</td>
    </tr>
    <tr>
      <td>Full Paper Submission Deadline</td>
      <td>04th February 2026</td>
    </tr>
    <tr>
      <td>Acceptance Notification</td>
      <td>07th February 2026</td>
    </tr>
    <tr>
      <td>Last Date to Register</td>
      <td>10th February 2026</td>
    </tr>
  </tbody>
</table> 
        <div className="subbtn"><a href="https://docs.google.com/forms/d/e/1FAIpQLScuhqQc1ZEEfYE1aA6ZAI6oB9IzQEzCm3-2HZPokZq5qcd9Cg/viewform?usp=dialog"><button className="submitpapbtn">Submit</button></a></div>
    </section>
    </div>
  )
}
