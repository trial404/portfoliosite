import { useState } from "react";
import styles from "../styles/desktop/webTest.module.css";
import { Project } from "./project";
import lightsgame from "../images/lightsgame.png";
import todolist from "../images/todolist.png";
import yelpcamp from "../images/yelpcamp.png";
import projectimage from "../images/projectimage.png";

export function GridItem({ id, c, h, w, js, as, toggleGridState, isActive }) {
  const stateStylesSmall = {
    backgroundColor: c,
    height: h,
    width: w,
    justifySelf: js,
    alignSelf: as,
  };

  const stateStylesBig = {
    border: `4px solid ${c}`,
    backgroundColor: "white",
    height: "auto",
    width: "auto",
    placeSelf: "stretch",
  };

  const projects = {
    b1: {
      title: "Light Board App",
      subHeading: "(VanillaJS)",
      description:
        "This a simple animated gameboard. The each square on the gameboard grid toggles on or off based on user input. The neighboring squares will also either turn on or off depending on their state prior to the user input. The goal of the game is to turn off all the lights in as few moves as possible. The app was created using react and was one my first introduction to using states.",
      media: lightsgame,
    },

    b2: {
      title: "TodoList App",
      subHeading: "(ReactJS)",
      description:
        "A simple todolist that handles user input with states and hooks. ",
      media: todolist,
    },

    b3: {
      title: "YelpCamp",
      subHeading: "(NodeJS / ExpressJS / MonogoDB)",
      description:
        "A full stack website that replicates the features of yelp to help users look for campgrounds in a given area. Each campground profile includes geotagged inforation as well as allows for reviews and comments from authenticated users.",
      media: yelpcamp,
    },

    b4: {
      title: "Movie Reviews API",
      subHeading: "(VanillaJS)",
      description:
        "A simple site that looks up movies and provides reviews based on a text search input",
      media: projectimage,
    },
  };

  const { title, subHeading, description, media } = projects[id];

  function clickHandler() {
    toggleGridState(id);
  }

  return (
    <>
      {isActive ? (
        <div
          className={styles.id}
          style={stateStylesBig}
          onClick={clickHandler}
        >
          <Project
            color={c}
            id={id}
            title={title}
            subHeading={subHeading}
            description={description}
            media={media}
          />
        </div>
      ) : (
        <div style={stateStylesSmall} onClick={clickHandler}>
          {/* <i class="fa-solid fa-circle fa-xlg"></i> */}
        </div>
      )}
    </>
  );
}
