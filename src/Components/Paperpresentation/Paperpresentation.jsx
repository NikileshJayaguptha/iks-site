import React from 'react'
import "./paperpresentation.css"

export default function Paperpresentation() {
  return (
    <section className="aboutwrapper">

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
          Participants can register for Paper Presentation either online during conference registration or in person at the registration desk on the day of the event.
          </p>
      </section>  
        <div className="subbtn"><a href="https://forms.gle/EngkxYgZvaJUp7T28"><button className="submitpapbtn">Submit</button></a></div>
    </section>
  )
}
