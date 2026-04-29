import React from 'react'
import './Weightlifting.css'

const Weightlifting = () => {
  // Competition results data
  const competitions = [
    {
      date: "November 2025",
      name: "Scottish Seniors",
      location: "Edinburgh",
      result: "1st Place (60kg)",
      total: "164kg",
      notes: "Officially Scottish Champ"
    },
    {
      date: "August 2025",
      name: "Scottish U23s",
      location: "Arbroath",
      result: "1st Place (60kg)",
      total: "166kg",
      notes: "U23 champ and qualified for Scottish Seniors"
    },
    {
      date: "April 2025",
      name: "British Universities Championships",
      location: "Uxbridge",
      result: "6th Place (67kg)",
      total: "157kg",
      notes: "First major competition in 67kg category"
    },
    {
      date: "February 2025",
      name: "Scottish University Championships",
      location: "Edinburgh",
      result: "1st Place (67kg)",
      total: "162kg",
      notes: "Set the Scottish Universities record for Clean and Jerk (97kg)"
    },
    {
      date: "August 2024",
      name: "Scottish U23 Championships",
      location: "Arbroath",
      result: "1st Place (61kg)",
      total: "148kg",
      notes: "Qualified for British Universities Championships"
    },
    {
      date: "May 2024",
      name: "Scottish Open",
      location: "Dundee",
      result: "1st Place (61kg)",
      total: "142kg",
      notes: "Only 61kg lifter to qualify for this event"
    },
    {
      date: "April 2024",
      name: "British Universities Championships",
      location: "Uxbridge",
      result: "2nd Place (61kg)",
      total: "145kg",
      notes: "First national competition"
    },
    {
      date: "February 2024",
      name: "Scottish University Championships",
      location: "Edinburgh",
      result: "1st Place (61kg)",
      total: "139kg",
      notes: "Qualified for British Universities Championships"
    },
    {
      date: "February 2023",
      name: "Scottish University Championships",
      location: "Edinburgh",
      result: "1st Place (61kg)",
      total: "123kg",
      notes: "First competition"
    }
  ];

  return (
    <div className="weightlifting-container">
      <div className="terminal-section">
        <div className='typing-container'>
          <h3 className='typing-text'>Weightlifting</h3>
        </div>
        
        <p>
          Outside of academics, I am an accomplished Olympic weightlifter competing in the 65kg weight class.
          I served as the President of the St Andrews Weightlifting Club in the 24/25 academic year, leading both training and competitions.
        </p>
      </div>

      <div className="terminal-section rankings-section">
        <div className='typing-container'>
          <h3 className='typing-text'>Current Rankings & Records</h3>
        </div>
        
        <div className="rankings-cards">
          <div className="ranking-card">
            <h4>National Ranking</h4>
            <span className="ranking-position">21st</span>
            <p>UK Senior 65kg</p>
          </div>
          
          <div className="ranking-card">
            <h4>Scottish Ranking</h4>
            <span className="ranking-position">1st</span>
            <p>Scottish Senior 60kg</p>
          </div>
          
          <div className="ranking-card highlight-card">
            <h4>Record Holder</h4>
            <span className="ranking-achievement">98kg</span>
            <p>Scottish Universities 60kg Class Clean and Jerk</p>
          </div>
        </div>
      </div>

      <div className="terminal-section">
        <div className='typing-container'>
          <h3 className='typing-text'>Gallery</h3>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/DSC_0508.jpg" alt="Snatch lift at Scottish Championships" />
            <p>Warm up area</p>
          </div>
          
          <div className="gallery-item">
            <img src="/DSC_0532.jpg" alt="Clean & Jerk at British University Championships" />
            <p>Clean & Jerk Record at Scottish University Championships</p>
          </div>
          
          <div className="gallery-item">
            <img src="/IMG_0358.jpg" alt="St Andrews Weightlifting Team" />
            <p>Snatch</p>
          </div>
          
          <div className="gallery-item">
            <img src="/IMG_0380.jpg" alt="Medal ceremony at Scottish Universities Championships" />
            <p>Celebrating with Coach</p>
          </div>
        </div>
      </div>

      <div className="terminal-section">
        <div className='typing-container'>
          <h3 className='typing-text'>Competition History</h3>
        </div>
        
        <div className="competition-table">
          <div className="table-header">
            <div className="table-cell">Date</div>
            <div className="table-cell">Competition</div>
            <div className="table-cell">Location</div>
            <div className="table-cell">Result</div>
            <div className="table-cell">Total</div>
            <div className="table-cell">Notes</div>
          </div>
          
          {competitions.map((comp, index) => (
            <div className="table-row" key={index}>
              <div className="table-cell">{comp.date}</div>
              <div className="table-cell">{comp.name}</div>
              <div className="table-cell">{comp.location}</div>
              <div className="table-cell">{comp.result}</div>
              <div className="table-cell">{comp.total}</div>
              <div className="table-cell">{comp.notes}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="terminal-section">
        <blockquote className="weightlifting-quote">
          "Training at a high level in Olympic weightlifting has taught me the 
          importance of discipline, perseverance, goal-setting, and adaptability—skills
           that I believe are directly transferable to my professional career. "
        </blockquote>
      </div>
    </div>
  )
}

export default Weightlifting
