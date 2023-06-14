import { useNavigate } from "react-router-dom";

export default function StoryCard({ storyTitle, storyId, key }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate("/story", { state: storyId }); //key is the story_id - passed to story component
  }
  console.log(storyId);
  return (
    <>
      <ul>
        <li key={key}>
          {storyTitle}{" "}
          <button onClick={handleClick}>Click here for more...</button>
        </li>
      </ul>
    </>
  );
}
