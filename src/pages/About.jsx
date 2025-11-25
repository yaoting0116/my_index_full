// src/pages/About.jsx
import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {
  const profile = useSelector((s) => s.profile)

  const categoryRules = {
    Languages: ['Python', 'R', 'JavaScript', 'TypeScript'],
    'Data & Analytics': ['Power BI', 'PostgreSQL', 'Pandas', 'SQL'],
    Frontend: ['React', 'Redux', 'HTML5', 'CSS3', 'Vite'],
  }

  const skills = Array.isArray(profile.skills) ? profile.skills : []

  const categorized = {}
  const used = new Set()

  Object.entries(categoryRules).forEach(([cat, list]) => {
    const items = skills.filter((s) => list.includes(s))
    if (items.length) {
      categorized[cat] = items
      items.forEach((i) => used.add(i))
    }
  })

  const others = skills.filter((s) => !used.has(s))

  const thesisTitle = profile.thesisTitle || profile.paperTitle || ''
  const thesisUrl = profile.thesisUrl || profile.paperUrl || ''

  return (
    <div className="about-page">
      {/* About Me */}
      <section className="about-card">
        <h2>About Me</h2>
        <p>
          I have a solid technical background and am proficient in a wide range of programming
          tools and frameworks. Currently, I am developing a personal web platform using Python, HTML,
          CSS, JavaScript, React JSX, React Router, Redux Toolkit, Vite, EmailJS, and Streamlit to
          showcase my past programming projects. I also integrate the latest AI technologies, such as
          Stable Diffusion, to generate images suitable for web presentation. Through this platform, I
          aim not only to highlight my technical skills but also to share my insights on AI applications,
          providing inspiration and support to other developers.
        </p>
        <p>
          Beyond technical development, I enjoy collaborating with teams, actively participating in project
          discussions and problem-solving, and sharing new technologies and practical experience. I have also
          obtained multiple professional certifications, including Industrial Electronics Level C, Computer
          Hardware Maintenance Level C, Instrumentation Electronics Level B, and PVQC Computer Professional
          English Vocabulary, which further strengthen my capabilities in both hardware and software development.
        </p>
        <p>
          In my future career, I hope to combine my passion for technology and innovation to contribute tangible
          value to the company. I look forward to joining a team where I can apply my skills to solve real-world
          problems, continue learning and growing, and achieve greater results together with the organization.
        </p>
      </section>

      {/* Skills */}
      <section className="about-card">
        <h3>Skills</h3>

        {Object.keys(categorized).map((cat) => (
          <div className="skill-category" key={cat}>
            <strong style={{ display: 'block', marginBottom: 8 }}>{cat}</strong>
            <div>
              {categorized[cat].map((s) => (
                <span key={s} className="skill-badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        {others.length > 0 && (
          <div className="skill-category">
            <strong style={{ display: 'block', marginBottom: 8 }}>Other</strong>
            <div>
              {others.map((s) => (
                <span key={s} className="skill-badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Thesis */}
      <section className="about-card">
        <h3>Thesis / Paper</h3>
        {thesisTitle ? (
          <div>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>{thesisTitle}</div>
            {thesisUrl ? (
              <a className="thesis-link" href={thesisUrl} target="_blank" rel="noreferrer">
                View paper / project
              </a>
            ) : (
              <div className="muted">No link provided</div>
            )}
          </div>
        ) : (
          <div className="muted">
            No thesis/paper added. To show one, add <code>thesisTitle</code> and <code>thesisUrl</code> to
            your profile in <code>src/store.js</code>.
          </div>
        )}
      </section>
    </div>
  )
}
