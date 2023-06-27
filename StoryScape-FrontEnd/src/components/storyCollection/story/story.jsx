import { GrMapLocation } from "react-icons/gr";

import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Story() {
  const { storyId } = useParams()
  const location = useLocation();
  //const story_id = location.state; // grabs the state passed
 
  const [story, setStory] = useState(null); // Declare and initialise the story state

  useEffect(() => {
    const filteredStory = stories.find((s) => s["story_id"] === storyId);

    setStory(filteredStory); // Update the story state with the filtered story
  }, [stories, story_id]);

  const renderAudioPlayer = () => {
    const audioFile = story.files.find((file) => file.type === "audio");
    if (audioFile) {
      return (
        <audio controls>
          <source src={audioFile.url}  />
          Your browser does not support the audio element.
        </audio>
      );
    }
    return null;
  };

  return (
    <>
      {story && <h1>{story.title}</h1>}{" "}
      {story && (
        <p>
          {story["location-country"]}, {story["location-city"]}
        </p>
      )}{" "}
      {story && (
        <p>
          {story.year}, {story.month}
        </p>
      )}{" "}
      {story && <p>{story.description}</p>}
      {story && renderAudioPlayer()}
      {story && (
        <div>
          {story.files
            .filter((file) => file.type === "text")
            .map((file, index) => (
              <p key={index}>{JSON.stringify(file.content)}</p>
            ))}
        </div>
      )}
      {/* Render the story title if story is not null */}
    </>
  );
}

{
  /* <h1>Title</h1>
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
<p>Story.description</p> */
}
