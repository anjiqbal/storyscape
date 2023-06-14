import React from 'react';
import { GrMapLocation } from 'react-icons/gr';

export default function Story() {
  return (
    <>
      <h1>Title</h1>
      <video controls loop autoPlay muted poster="https://drive.google.com/file/d/1J2qrLOjQn_0CqlYnasZouqc7YItk8Pyi/view?usp=drive_link ">
        <source src="https://drive.google.com/file/d/1J2qrLOjQn_0CqlYnasZouqc7YItk8Pyi/view?usp=drive_link" />
      </video>
        <p>Short description of video</p>
        <p><GrMapLocation/> Location:</p>

<figure ClassName="audio-section">
    <figcaption>Listen to Audio:</figcaption>
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a>
    </audio>
</figure>
<p>Story.description</p>

    </>
  );
} 