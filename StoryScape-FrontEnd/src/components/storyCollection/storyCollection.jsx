import { useState, useEffect } from "react";
import StoryCard from "./storyCard/storyCard";
import { Row, Col } from "react-bootstrap";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./storyCollection.css";
import supabase from "../../config/supabaseClient";




export default function StoryCollection() {
  const location = useLocation();
  const input = location.state;
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("stories")
        .select()
        .eq("story_location", input);

      if (data !== null) {
        setResult(data);
      }

      if (error) {
        alert("error");
        console.log(error);
      }
    };

    fetchData();
  }, [input]);

  useEffect(() => {
    console.log(result); // Log the updated result state
  }, [result]);

  return (
    <div className="story-collection-wrapper">
      <header>
        <NavBar />
      </header>
      <>
        {result && (
          <main className="story-collection-content">
            <Row className="h-100">
              <Col>
                {result.length === 0 ? (
                  <p>No matching stories found.</p>
                ) : (

                  result.map((story) => (
                    <StoryCard
                      result={result}
                      storyId={story.story_id}
                      storyTitle={story.story_title}
                      storyLocation ={story.story_location}
                      storyDescription={story.story_description}
                      key={story.story_id}
                    />
                  ))
                )}
              </Col>
            </Row>
          </main>
        )}
      </>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}





// import { useState, useEffect } from "react";
// import StoryCard from "./storyCard/storyCard";
// import { Row, Col } from "react-bootstrap";
// import Footer from "../Footer/footer";
// import { useLocation } from "react-router-dom";
// import NavBar from "../navBar/navBar";
// import "./storyCollection.css";
// import supabase from "../../config/supabaseClient";


// export default function StoryCollection() {
//   // Get the search term from the location state
//   const location = useLocation();
//   const input = location.state;
//   const [result, setResult] = useState([]);
//   const [fetchError, setFetchError] = useState(null)
//   console.log(input)

// useEffect(() => {
//   const fetchData = async () => {
//       const { data, error } = await supabase
//     .from("stories")
//     .select()
//     .eq("story_location", input);
    
//     if(data!==null){
//      setResult(data)
//       console.log(result)
//     } 
  

//     if (error){	
//       alert ('error')
//       setFetchError('could not fetch stories')
//       setStories(null)
//       console.log(error)
//     }
//     if (data) {
//       setStories(data)
//       setFetchError(null)
//       }
//   };

//   fetchData();

// }, [input]); 



//   return (
//     <div className="story-collection-wrapper">
//       <header>
//         <NavBar />
//       </header>
//       <>
//       {result && (
//       <main className="story-collection-content">
//         <Row className="h-100">
//           <Col>
//             {result.length === 0 ? (
//               <p>No matching stories found.</p>
//             ) : (
//               result.map((story) => (
//                 <StoryCard
//                   storyTitle={story.title}
//                   key={story.story_id}
//                   storyId={story.story_id}
//                 />
//               ))
//             )}
           
//           </Col>
//         </Row>
//       </main>
//       )}</>
//       <footer >
//         <Footer />
//       </footer>
//     </div>
//   );
// }


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
