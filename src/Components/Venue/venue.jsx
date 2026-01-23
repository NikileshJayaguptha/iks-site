import React from 'react'
import "./venue.css"
import tariff from "../../assets/tariff.jpg"
export default function Venue() {
  return (
    <div className='VenueBackground'>
      <section className="aboutsection">
        <h2 className="abtssntitle">How to reach</h2>
        <p className="abouttext">
Sri Sivasubramaniya Nadar College of Engineering is located at Kalavakkam, Old
Mahabalipuram Road (OMR), Chennai. The campus is well connected by road, rail, and air
transport. If participants are planning to use public transport, they are advised to follow the instructions given below for a smooth and convenient journey to the campus.
<br /><b>By Bus</b><br />
Participants may reach the campus by availing MTC or SETC buses operating along Old
Mahabalipuram Road (OMR).
<ul>
<li> Board buses heading towards Kalavakkam / Kelambakkam / Mahabalipuram.</li>
<li> Kindly get down at SSN College Bus Stop.</li>
</ul>
Regular bus services are available from major locations such as Tambaram, Thiruvanmiyur,
Adyar, Koyambedu, and Broadway.
<br /><br /><b>By Train</b><br />
The nearest major railway stations are:
<ul>
<li>Chengalpattu Junction (approximately 20 km)</li>
<li>Tambaram Railway Station (approximately 25 km)</li>
</ul>
Both stations are well connected by suburban and long-distance trains. From either station,
participants may proceed to the campus by OMR-bound buses, autos, or taxi services.
<br /><br /><b>By Air</b><br />

Chennai International Airport is the nearest airport, located approximately 35 km from the
college campus.From the airport, participants may hire cab for direct travel to the campus. Alternatively, they
may travel to Tambaram and board an OMR-bound bus towards Kalavakkam. The approximate
travel time from the airport is 1.5 to 2 hours, subject to traffic conditions.
          </p>
      </section>

      <section className="aboutsection">
        <h2 className="abtssntitle">Bus Routes</h2>
        <p className="abouttext">
          Participants are allowed to board SSN College's Bus and the Routes will be updated shortly
        </p>
      </section>
      

      <section className="aboutsection">
        <h2 className="abtssntitle">Accomodation</h2>
        <p className="abouttext">Participants may avail on-campus hostel accommodation during the conference dates. The hostel fee must be paid during registration on Day 1 of the conference. The tariffs are given below.</p>
        
      </section>
      <img src={tariff} alt="" className='tariff_img'/>
    </div>
  )
}
