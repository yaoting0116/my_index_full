// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ p, linkType = 'external' }) {
  return (
    <div className="card project-card">
      <h3>{p.title}</h3>

      {/* ㄏノ pre-line 琵﹃い \n 锣传Θ传︽ */}
      <p style={{ whiteSpace: 'pre-line', marginTop: '8px', lineHeight: 1.6 }}>
        {p.desc}
      </p>

      {linkType === 'internal' ? (
        // ず场隔パㄒ Home ㄏノ
        <Link to={`/projects/${p.id}`} style={{ display: 'inline-block', marginTop: 8 }}>
          View
        </Link>
      ) : (
        // 场硈挡 Projects ㄏノゴ秨穝だ
        <a href={p.url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 8 }}>
          View
        </a>
      )}
    </div>
  );
}
