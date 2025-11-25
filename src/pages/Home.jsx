// src/pages/Home.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const profile = useSelector((s) => s.profile)
  return (
    <div className="home-page">
      <section className="hero">
        <h2>Hello — I'm {profile.name}</h2>
        <p className="lead">{profile.bio}</p>
        <div className="skill-list">
          {profile.skills.map((s) => (
            <span key={s} className="skill">{s}</span>
          ))}
        </div>
      </section>

      <section className="preview-projects">
        <h3>Selected Projects</h3>
        <div className="cards">
          {profile.projects.map((p) => (
            // 傳給 ProjectCard 的 url 改為 homeUrl
            <ProjectCard key={p.id} p={{ ...p, url: p.homeUrl }} />
          ))}
        </div>
      </section>
    </div>
  )
}
