import React from 'react'
import "./schedule.css"
export default function Schedule() {
  return (
    <div className='schedulewrapper'>
      <table className="dates-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    {/* 12th February */}
    <tr>
      <td className="event-name">Registration</td>
      <td>12 February 2026</td>
      <td>8:00 AM – 9:00 AM</td>
    </tr>
    <tr>
      <td className="event-name">Inauguration</td>
      <td>12 February 2026</td>
      <td>9:00 AM – 9:30 AM</td>
    </tr>
    <tr>
      <td className="event-name">First Talk</td>
      <td>12 February 2026</td>
      <td>9:30 AM – 10:30 AM</td>
    </tr>
    <tr>
      <td className="event-name">Tea Break</td>
      <td>12 February 2026</td>
      <td>10:30 AM – 10:45 AM</td>
    </tr>
    <tr>
      <td className="event-name">Second Talk</td>
      <td>12 February 2026</td>
      <td>10:45 AM – 12:00 PM</td>
    </tr>
    <tr>
      <td className="event-name">Paper Presentation & Quiz Prelims</td>
      <td>12 February 2026</td>
      <td>12:00 PM – 1:00 PM</td>
    </tr>
    <tr>
      <td className="event-name">Lunch Break</td>
      <td>12 February 2026</td>
      <td>1:00 PM – 2:00 PM</td>
    </tr>
    <tr>
      <td className="event-name">Cultural Program</td>
      <td>12 February 2026</td>
      <td>2:00 PM – 3:30 PM</td>
    </tr>

    {/* 13th February */}
    <tr>
      <td className="event-name">Third Talk</td>
      <td>13 February 2026</td>
      <td>9:00 AM – 10:30 AM</td>
    </tr>
    <tr>
      <td className="event-name">Tea Break</td>
      <td>13 February 2026</td>
      <td>10:30 AM – 10:45 AM</td>
    </tr>
    <tr>
      <td className="event-name">Fourth Talk</td>
      <td>13 February 2026</td>
      <td>10:45 AM – 12:15 PM</td>
    </tr>
    <tr>
      <td className="event-name">Lunch Break</td>
      <td>13 February 2026</td>
      <td>12:15 PM – 1:30 PM</td>
    </tr>
    <tr>
      <td className="event-name">Quiz Finals</td>
      <td>13 February 2026</td>
      <td>2:00 PM – 3:00 PM</td>
    </tr>
    <tr>
      <td className="event-name">Valedictory</td>
      <td>13 February 2026</td>
      <td>3:00 PM – 3:30 PM</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
