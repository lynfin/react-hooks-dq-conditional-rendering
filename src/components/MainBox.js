import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [childName, setChildName] = useState("Profile");
  function handleChangeDisplay(newDisplay) {
    setChildName(newDisplay);
  }

  let componentToDisplay;
  if (childName === "Profile") {
    componentToDisplay = <Profile />;
  } else if (childName === "Photos") {
    componentToDisplay = <Photos />;
  } else if (childName === "Cocktails") {
    componentToDisplay = <Cocktails />;
  } else if (childName === "Pokemon") {
    componentToDisplay = <Pokemon />;
  }
  return (
    <div>
      <MenuBar
        onChangeDisplay={handleChangeDisplay}
        activeDisplay={childName}
      />
      {componentToDisplay}
    </div>
  );
}

export default MainBox;
