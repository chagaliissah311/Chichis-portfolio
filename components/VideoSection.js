export default function VideoSection({ video }) {
  if (!video) return null;

  return (
    <section className="reveal" id="video">
      <div className="section-title">
        <h2>{video.title || 'Video Reel'}</h2>
        <p>{video.subtitle || 'A cinematic showcase of elegance, movement, and presence.'}</p>
      </div>

      <div className="video-card">
        <div className="video-frame">
          <iframe
            src={video.url}
            title={video.title || 'Model video reel'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {video.caption ? <p className="video-caption">{video.caption}</p> : null}
      </div>
    </section>
  );
}
