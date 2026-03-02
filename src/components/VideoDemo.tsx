import React from 'react';

// VideoDemo demonstrates an accessible video player with captions and
// transcripts. A poster image is used when the video cannot be loaded
// locally. Users can access the full transcript via a link.

const VideoDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Accessible video playback with
        captions and transcripts. Videos should include text alternatives so
        users who cannot see or hear the content can still access the
        information.
      </p>
      <ul>
        <li>Use the keyboard to play/pause the video and toggle captions.</li>
        <li>
          View the <em>Audio description transcript</em> to read what happens in
          the video.
        </li>
      </ul>
      <div>
        <label id="video-label" htmlFor="sample-video" style={{ display: 'block' }}>
          Sample video (placeholder)
        </label>
        <video
          id="sample-video"
          aria-labelledby="video-label"
          controls
          poster="/images/placeholder.png"
          style={{ width: '100%', maxWidth: '100%' }}
        >
          {/*
            The src attribute is intentionally left blank. Replace
            '/video.mp4' with your own media file in the public folder.
          */}
          <source src="/video.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/video-captions.vtt"
            srcLang="en"
            label="English captions"
            default
          />
          Your browser does not support the video tag.
        </video>
        <p>
          <a href="/video-transcript.md" download>
            Audio description transcript
          </a>
        </p>
      </div>
    </div>
  );
};

export default VideoDemo;