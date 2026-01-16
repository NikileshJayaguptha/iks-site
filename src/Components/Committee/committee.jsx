import React from 'react'
import Committeecard from '../committeecard/committeecard'
import convenor from "../../assets/radha.png"
import venkateswaran from "../../assets/venkateswaran.png"
import satishkumar from "../../assets/satish.png"
import sundaresh from "../../assets/sundareswaran.png"
import shanmugapriya from "../../assets/shanmugapriya.png"
import "./committee.css"
export default function committee() {
  return (
    <div className='committeecontainer'>
      <div className="blocktitle">Convenor</div>
      <div className="block">
        
        <Committeecard image={convenor} name="Dr. S. Radha" title="Senior Professor and Principal" />
      </div>
      <div className="blocktitle">Coordinators</div>
      <div className="block">
        
        <Committeecard image={venkateswaran} name="Dr. N. Venkateswaran" title="Professor, Department of Electronics and Communication Engineering" />
        <Committeecard image={satishkumar} name="Dr. K. Sathish Kumar" title="Professor and Head of the Department, Department Of Chemical Engineering" />
        <Committeecard image={sundaresh} name="Dr. R. Sundareswaran" title="Associate Professor,Department of Mathematics" />
        <Committeecard image={shanmugapriya} name="Dr. M. Shanmugapriya" title="Associate Professor, Department of Mathematics" />        
      </div>
      <div className="blocktitle">Advisory Committee</div>
      <div className="listblock">
        <ul>
          <li><span>Dr. S. Narasimman</span> – ERP Planning</li>
          <li><span>Dr. S. Vijayan</span> – Professor, Department of Mechanical Engineering</li>
          <li><span>Dr. I. Jayakaran Amalraj</span> – Associate Professor, Department of Mathematics</li>
          <li><span>Dr. Vijay Jeyakumar</span> – Associate Professor, Department of Biomedical Engineering</li>
          <li><span>Dr. A. M. Shanmugharaj</span> – Associate Professor, Department Of Chemical Engineering</li>
          <li><span>Dr. G. Aswin Sriram</span> – Assistant Professor, Department of Civil Engineering</li>
        </ul>
      </div>

      <div className="blocktitle">Student Coordinators</div>
      <div className="listblock">
        <ul>
          <li><span>Mr. Nikilesh Jayaguptha</span> – Final Year, Department of Computer Science</li>
          <li><span>Ms. R. Srilakshya</span> – Third Year, Department of Biomedical Engineering</li>
          <li><span>Ms. Swathi Muralikrishnan</span> – Third Year, Department of Biomedical Engineering</li>
          <li><span>Mr. Augustine Wisely Bezalel</span> – Final Year, Department of Biomedical Engineering</li>
          <li><span>Ms. Abirami Thirupathy</span> – Final Year, Department of Biomedical Engineering</li>
        </ul>
      </div>

    </div>
  )
}
