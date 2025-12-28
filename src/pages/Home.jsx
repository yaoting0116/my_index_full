// src/pages/Home.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'
import RPGDialogue from '../components/RPGDialogue'
import { selectProfile } from '../store'

export default function Home() {
  const profile = useSelector(selectProfile) || {}

  // page-specific constant（不放 store）
  const targetUrl = 'https://ting-ai-website-v2.pages.dev/'

  // 將 {name} token 替換為 profile.name（避免把動態字串放進 store）
  const processedDialogues = (profile.introDialogues || []).map((d) => {
    return d.replace(/\{name\}/g, profile.name || 'Guest')
  })

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Hello — I'm {profile.name}</h2>
        <p className="lead">{profile.bio}</p>
        <div className="skill-list">
          {(profile.skills || []).map((s) => (
            <span key={s} className="skill">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="preview-projects">
        <h3>Selected Projects</h3>
        <div className="cards">
          {(profile.projects || [])
            .filter(p => p.featured) // <-- 只顯示 featured 的
            .map((p) => (
              <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="about-card">
        <h3>{profile.siteRoleTitle || 'Site Administrator'}</h3>
        <div style={{ marginTop: 8 }}>
          <RPGDialogue
            image={profile.guideImage || '/images/guide-girl.jpg'}
            dialogues={processedDialogues}
            typingSpeed={28}
            targetUrl={targetUrl}
          />
        </div>
      </section>
    </div>
  )
}
