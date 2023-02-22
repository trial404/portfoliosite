import { useState } from "react";
import styles from "../styles/webTest.module.css";
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
      title: "LightsBoard App(VanillaJS)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.... ",
      media: lightsgame,
    },

    b2: {
      title: "TodoList App (ReactJS)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.... ",
      media: todolist,
    },

    b3: {
      title: "YelpCamp (VanillaJS)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.... ",
      media: yelpcamp,
    },

    b4: {
      title: "Movie Reviews API (VanillaJS)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.... ",
      media: projectimage,
    },
  };

  const { title, description, media } = projects[id];

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
            description={description}
            media={media}
          />
        </div>
      ) : (
        <div style={stateStylesSmall} onClick={clickHandler}></div>
      )}
    </>
  );
}
