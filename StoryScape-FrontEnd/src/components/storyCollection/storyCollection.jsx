import { useState, useEffect } from "react";
import StoryCard from "./storyCard/storyCard";
import dummyData from "../../../db.json";
import { Row, Col } from "react-bootstrap";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./storyCollection.css";


export default function StoryCollection() {
  // Get the search term from the location state
  const location = useLocation();
  const searchTerm = location.state;

  // Initialise state variables
  const [filteredStories, setFilteredStories] = useState([]);
  const stories = dummyData.stories;

  // Filter the stories based on the search term
  useEffect(() => {
    const filteredData = stories.filter(
      (story) => story["location-country"] === searchTerm
    );
    setFilteredStories(filteredData);
  }, [searchTerm, stories]);

  return (
    <div className="story-collection-wrapper">
      <header>
        <NavBar />
      </header>
      <main className="story-collection-content">
        <Row className="h-100">
          <Col>
            {filteredStories.length === 0 ? (
              <p>No matching stories found.</p>
            ) : (
              filteredStories.map((story) => (
                <StoryCard
                  storyTitle={story.title}
                  key={story.story_id}
                  storyId={story.story_id}
                />
              ))
            )}
           
          </Col>
        </Row>
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}


/* 
- const searchTerm = "England"
- loop through the dummy data and return any story where location-country === searchTerm
- save that to an array - useState [storyArray, setStoryArray]
- we use map to loop through the stories from storyArray and return a storyCard for each story
*/

//FETCH JSON WITHIN SAME VSCODE (NOT API)
// import fs from "node:fs/promises";
// import { v4 as uuidv4 } from "uuid";

// const fileName = "recipes.json";

// // GET ALL RECIPES
// // Should return an array of all recipes
// // Read the file
// // Parse the read file (convert from JSON)
// // Return recipes
// export async function getRecipes() {
//   const recipesJSON = await fs.readFile(fileName);
//   const recipes = JSON.parse(recipesJSON);
//   return recipes;
// }

//USEEFFECT + FETHCING WITH API
//   useEffect(() => {
//     async function fetchPokemon() {
//       const res = await fetch(
//         `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
//       );
//       const data = await res.json();

//       setPokemon(data.data);
//       setIsLoading(false); // set loading state to false once data is loaded
//     }
//     fetchPokemon();
//   }, [pokemonName]);

//   return (
//     <div className="card-collection">
//       <header>
//         <Header />
//       </header>
//       {isLoading ? (
//         <h2>Loading...</h2> // render loading message while data is being fetched
//       ) : (
//         <>
//           <h2>PokeDeck</h2>
//           <ul className="card-collection__cards">
//             {Array.isArray(pokemon) &&
//               pokemon.map((card) => (
//                 <Card
//                   srcSmall={card.images.small}
//                   srcLarge={card.images.large}
//                   name={card.name}
//                   alt={card.name}
//                   key={card.id}
//                   supertype={card.supertype}
//                   subtypes={card.subtypes}
//                   hp={card.hp}
//                   types={card.types}
//                   setName={card.set.name}
//                   artist={card.artist}
//                   rarity={card.rarity}
//                 />
//               ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// }

// export default CardCollection;
