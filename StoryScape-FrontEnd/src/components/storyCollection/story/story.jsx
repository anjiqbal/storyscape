import { useLocation } from "react-router-dom";

export default function StoryPage() {
  const location = useLocation();
  const { storyId, storyTitle, storyLocation, storyDescription } = location.state;

  return (
    <div>
      <h2>{storyTitle}</h2>
      <p>{storyLocation}</p>
      <p>{storyDescription}</p>
      {/* Render the full story content here */}
    </div>
  );
}
