import React from 'react'

const Education = () => {
  const educationData = [
    {
      degree: "Master of computer science (pursuing)",
      institution: "MIT Alandi",
      year: "2023 - 2025",
      description: "Specialized in Computer science"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "BPHE society ahmednagar college ",
      year: "2020 - 2023",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Machine Learning"
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="heading">Education</h2>
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <p className="year">{edu.year}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 