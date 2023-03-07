import React from 'react';
import YouTube from 'react-youtube';
import './VideoList.css';

const videos = [
  'MXzJiKt9fA',
  'PMXzJiKt9fB',
  'PMXzJiKt9fE',
  // ... Agrega tantos IDs de video como necesites
];

const VideoList = () => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div className="row">
        {videos.map((videoId) => (
          <div key={videoId} className="col-md-3 video">
            <div className="video-player">
              <YouTube videoId={videoId} opts={opts} />
            </div>
            <div className="video-title">
              <h3>Title of the video</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default VideoList;