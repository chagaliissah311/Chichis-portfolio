import Image from 'next/image';

export default function ProjectsSection({ projects }) {
  if (!projects) return null;

  return (
    <section className="reveal projects-section" id="projects">
      <div className="section-title">
        <h2>{projects.title}</h2>
        <p>{projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.items?.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={520}
                height={340}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="project-body">
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
