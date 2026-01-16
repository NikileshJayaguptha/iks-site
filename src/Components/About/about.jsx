import React from 'react'
import "./about.css"

export default function About() {
  return (
    <section className="aboutwrapper">

      <section className="aboutsection">
        <h2 className="abtssntitle">About SSN</h2>
        <p className="abouttext">
          Sri Sivasubramaniya Nadar College of Engineering (SSNCE) is an autonomous institution affiliated with Anna University, founded by Dr. Shiv Nadar, Founder Chairman of HCL Technologies. Recognized as one of Tamil Nadu’s premier engineering institutions, SSNCE is committed to excellence in education and research. The college offers undergraduate, postgraduate, and research programs supported by accomplished faculty and world-class infrastructure on a fully residential 250-acre campus. SSNCE is accredited with an A++ grade by NAAC, with multiple programs accredited by NBA, and is consistently ranked among the top institutions in India by NIRF.
        </p>
      </section>

      <section className="aboutsection">
        <h2 className="abtssntitle">About IKS</h2>
        <p className="abouttext">
          The Indian Knowledge System (IKS) is an indigenous and interdisciplinary
          knowledge framework developed in India, encompassing scientific,
          philosophical, technological, and cultural traditions aimed at holistic
          understanding and sustainable living. It represents an integrated approach
          to knowledge that harmonizes material progress with spiritual wisdom.
        </p>
      </section>
      

      <section className="aboutsection">
        <h2 className="abtssntitle">Who can participate?</h2>
        <p className="abouttext">Academicians and researchers; undergraduate and postgraduate students; doctoral (Ph.D.) scholars; practitioners of Indian traditional systems; policy experts and professionals; as well as spiritual teachers and cultural enthusiasts.</p>
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

    </section>
  )
}
