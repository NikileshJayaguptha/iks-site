import React from 'react'
import "./quizpage.css"
export default function Quizpage() {
  return (
    <div>
      <section className="aboutwrapper">
        <section className="aboutsection">
          <h2 className="abtssntitle">IKS QUIZ</h2>

          <p className="abouttext">
            A short quiz based on Indian Knowledge Systems (IKS), designed around the core themes of the conference. The quiz aims to encourage awareness and understanding of traditional Indian knowledge and its relevance to contemporary research and interdisciplinary studies.
          </p>
        </section>

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
        <h2 className="abtssntitle">Registration</h2>
        <p className="abouttext">
          Participants can register for the IKS Quiz either online during conference registration or in person at the registration desk on the day of the event.
          </p>
      </section>  

        <table className="dates-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="event-name">Quiz Prelims</td>
      <td>12 February 2026</td>
      <td>12:00 PM – 1:00 PM</td>
    </tr>
    <tr>
      <td className="event-name">Quiz Finals</td>
      <td>12 February 2026</td>
      <td>2:00 PM – 3:00 PM</td>
    </tr>
  </tbody>
</table>

    </section>
    </div>
  )
}
