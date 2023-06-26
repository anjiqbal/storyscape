import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StoryPage() {
  const location = useLocation();
  const story_id = location.state; // grabs the state passed
  const stories = dummyData.stories;
  const [story, setStory] = useState(null); // Declare and initialise the story state

  useEffect(() => {
    const filteredStory = stories.find((s) => s["story_id"] === story_id);

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
