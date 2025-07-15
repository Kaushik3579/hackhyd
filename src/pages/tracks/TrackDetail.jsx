import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { tracks } from '../../data/tracks';
import '../../styles/track-detail.css';

const TrackDetail = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { trackId } = useParams();
  const track = tracks.find(t => t.id === trackId);

  if (!track) {
    return <div className="track-not-found">Track not found</div>;
  }

  return (
    <div className="track-detail-page">
      <div className="container">
        <div className="track-header">
          <div className="track-icon">{track.icon}</div>
          <h1>{track.title}</h1>
          <p className="track-description">{track.description}</p>
        </div>

        <div className="problem-statements">
          <h2>Problem Statements</h2>
          <div className="problems-grid">
            {track.problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-number">{index + 1}</div>
                <div className="problem-content">
                  <h3 className="problem-title">{problem.title}</h3>
                  <p className="problem-description">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetail;
