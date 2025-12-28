// src/pages/Projects.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = useSelector((s) => s.profile.projects)
  return (
    <div className="projects-page">
      <h2>Projects : [GitHub]</h2>
      <div className="cards">
        {projects.map((p) => (
          // projectUrl
          <ProjectCard key={p.id} p={{ ...p, url: p.projectUrl }} />
        ))}
      </div>
    </div>
  )
}
