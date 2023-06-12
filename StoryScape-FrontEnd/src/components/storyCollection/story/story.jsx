import React from 'react';
import { GrMapLocation } from 'react-icons/gr';

export default function Story() {
  return (
    <>
      <h1>Title</h1>
      <video controls loop autoPlay muted poster="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/12145465_444078379115659_399268826_n.jpg" className="life-one-photo-video">
        <source src="https://www.youtube.com/watch?v=qz0aGYrrlhU" />
      </video>
        <p>Short description of video</p>
        <p><GrMapLocation/> Location:</p>

<figure>
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
  