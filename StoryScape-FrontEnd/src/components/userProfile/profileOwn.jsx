import React from 'react'
import Navbar from "../navBar/navBar";

export default function ProfileOwn() {
  return (
    <>
    <Navbar/> 
    <div>P</div>
    </>
  )
}
//when clicking on the profile icon from the home page, it takes you to the profileOwn page and updates the paddingRight
// but when you click on it again it updates the route again. Need to figure out how to make it so that it doesn't update the route again
//Soz if I broke anything