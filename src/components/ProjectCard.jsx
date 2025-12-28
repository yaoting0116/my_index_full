// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ p, linkType = 'external' }) {
  // 容錯: 優先使用 p.url，沒有再用 homeUrl / projectUrl
  const externalUrl = p.url || p.homeUrl || p.projectUrl || '#';

  return (
    <div className="card project-card">
      <h3>{p.title}</h3>

      <p style={{ whiteSpace: 'pre-line', marginTop: '8px', lineHeight: 1.6 }}>
        {p.desc}
      </p>

      {linkType === 'internal' ? (
        <Link to={`/projects/${p.id}`} style={{ display: 'inline-block', marginTop: 8 }}>
          View
        </Link>
      ) : (
        <a href={externalUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 8 }}>
          View
        </a>
      )}
    </div>
  );
}
