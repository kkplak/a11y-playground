import React from 'react';

// AudioDemo shows how to provide accessible audio playback.  The audio
// element is labelled, includes a simple source and offers a transcript for
// users who cannot hear the clip. The audio file can be replaced with
// another file located in the public directory.

const AudioDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Audio players should provide
        transcripts and clear labelling so users who cannot hear the audio can
        still access the information.
      </p>
      <ul>
        <li>Use the keyboard to play/pause the audio.</li>
        <li>Download the transcript to read the description of the sound.</li>
      </ul>
      <div>
        <label id="audio-label" htmlFor="sample-audio" style={{ display: 'block' }}>
          Sample audio (tone)
        </label>
        <audio id="sample-audio" aria-labelledby="audio-label" controls>
          <source src="/audio.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p>
          <a href="/audio-transcript.md" download>
            Audio transcript
          </a>
        </p>
      </div>
    </div>
  );
};

export default AudioDemo;