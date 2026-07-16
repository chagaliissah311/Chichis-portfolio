import Image from 'next/image';

export default function EducationSection({ education, graphicImage }) {
  return (
    <section className="reveal education-section" id="education">
      <div className="section-title">
        <h2>Education</h2>
        <p>Academic and professional foundations that support a confident, thoughtful career.</p>
      </div>
      <div className="education-grid">
        <div className="education-copy">
          {education?.map((item) => (
            <div key={item.institution}>
              <h3>{item.institution}</h3>
              <p>{item.qualification}</p>
            </div>
          ))}
        </div>
        <div className="education-visual">
          <Image
            src={graphicImage}
            alt="Education graphic"
            width={520}
            height={420}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
