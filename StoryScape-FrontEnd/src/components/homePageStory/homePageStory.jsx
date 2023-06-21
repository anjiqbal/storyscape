import { useState, useEffect } from "react";
import image1 from "./images/Story-1.jpg";
import image2 from "./images/Story-2.jpg";
import image3 from "./images/Story-3.jpg";
import image4 from "./images/Story-4.jpg";
import image5 from "./images/Story-5.jpg";
import image6 from "./images/Story-6.jpg";
import "./homePageStory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const HomePageStory = (props) => {
  const [story, setStory] = useState({});
  const [previousIndex, setPreviousIndex] = useState(-1);
  console.log(props.stories)
  const stories = props.stories
  // console.log(stories)
  
  useEffect(() => {
    if (props.stories !== null) {
      const randomIndex = Math.floor(Math.random() * stories.length);
      console.log(stories.length);
    }
  
  //   if (randomIndex === previousIndex) {
  //     return;
  //   }
  //   setPreviousIndex(randomIndex);
  //   setStory(stories[randomIndex]);
  // }, [stories.length, previousIndex]);

  }, [props.stories])
  // console.log(props.stories[0])
  // const stories = [
  //   {
  //     image: image1,
  //     title: "A walk in the Park",
  //     user: "John Doe",
  //     paragraph:
  //      SOMETHING HAPPENED
  //   },
  //   {
  //     image: image2,
  //     title: "The Outback, Keepin' low and gettin' Dough.",
  //     user: "Bubba Gump",
  //     paragraph:
  //       "Well it all started off just outside of Bendigo, Old Bubba was heading on down the line when he encountered the most pecuilar looking thing he ever did see. He bent down to see what it was and to his surprise it was a nugget of gold. He picked it up and said 'Well I'll be, I'm rich!",
  //   },
  //   {
  //     image: image3,
  //     title: "Hastings, A Battle for the Ages",
  //     user: "William, T, C.",
  //     paragraph:
  //       "The battle opened with the Norman archers shooting uphill at the English shield wall, to little effect. The uphill angle meant that the arrows either bounced off the shields of the English or overshot their targets and flew over the top of the hill. The lack of English archers hampered the Norman archers, as there were few English arrows to be gathered up and reused.",
  //   },
  //   {
  //     image: image4,
  //     title: "The Canyon that's Grand",
  //     user: "David, R, F",
  //     paragraph:
  //       "Grand Canyon National Park is in the northwest corner of Arizona. The Colorado River flows through the canyon, comprised from water from seven states, yet the feature we know as Grand Canyon is entirely in Arizona. A 277-mile (446 km) canyon separates the park into North and South Rims. The South Rim of the Grand Canyon is open all year, receives about 90% of the park visitation, and has two visitor entrances: the South Visitor entrance and the East Visitor entrance at Desert View.",
  //   },
  //   {
  //     image: image5,
  //     title: "The Partition - A First hand account.",
  //     user: "Talbot, Ian",
  //     paragraph:
  //       "Massive population exchanges occurred between the two newly formed states in the months immediately following the partition. There was no conception that population transfers would be necessary because of the partitioning. Religious minorities were expected to stay put in the states they found themselves residing. An exception was made for Punjab, where the transfer of populations was organized because of the communal violence affecting the province; this did not apply to other provinces. The Punjab Boundary Force, which was formed to maintain security in the Punjab, was given the responsibility to oversee the transfer of populations. The force was led by British officers and had 50,000 soldiers drawn equally from the Indian Army and the Pakistan Army. The Punjab Boundary Force was assisted by the local administration in the transfer of populations.",
  //   },
  //   {
  //     image: image6,
  //     title: "Wirral, A place of beauty and wonder",
  //     user: "Dawson, Greg",
  //     paragraph:
  //       "After invading England in 1066 and subduing Northumbria in 1069/1070, William the Conqueror invaded and ravaged Chester and its surrounding area, laying waste to much of the Wirral. The Domesday survey of 1086 shows that the Wirral then was more densely populated than most of England, and the manor of Eastham, which covered most of the east of the peninsula from Bidston to the River Gowy, was the second largest in Cheshire. Of the 28 former lords of the Wirral manors listed, 12 bore Norse names. By 1086, most of the area was in the hands of Norman lords such as Robert of Rhuddlan, his cousin Hugh d'Avranches, and Hamo de Mascy. The survey shows 405 family heads living in the peninsula, suggesting a total population of 2,000 to 3,000",
  //   },
  // ];

  // Plan 
  // We want to create a variable called randomIndex
  // Then generate a random number and assign this to randomIndex
  // 

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * stories.length);
  //   if (randomIndex === previousIndex) {
  //     return;
  //   }
  //   setPreviousIndex(randomIndex);
  //   setStory(stories[randomIndex]);
  // }, [stories.length, previousIndex]);

  return (
    <>
    {stories && (
    <Container className="piccontainer">
      <img src={story.image} alt="Story" className="image" />
      <div className="ustorycontainer">
        <h2 className="title">{story.title}</h2>
        <em className="storyUserName"> By: {story.user} </em>
        <p className="text">{story.paragraph}</p>
      </div>
    </Container>
    )}</>
  );
};

export default HomePageStory;
