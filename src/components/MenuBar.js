import React from "react";

function MenuBar({ onChangeDisplay, activeDisplay }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  function handleClick(e) {
    onChangeDisplay(e.target.getAttribute("name"));
    //onChangeDisplay(e.target.getAttribute("name"));
  }

  return (
    <div className="ui four item menu">
      <span
        onClick={handleClick}
        name="Profile"
        className={activeDisplay === "Profile" ? "item active" : "item"}
      >
        <i name="Profile" className="user large icon" />
      </span>

      <span
        onClick={handleClick}
        name="Photos"
        className={activeDisplay === "Photos" ? "item active" : "item"}
      >
        <i name="Photos" className="photo large icon" />
      </span>

      <span
        onClick={handleClick}
        name="Cocktails"
        className={activeDisplay === "Cocktails" ? "item active" : "item"}
      >
        <i name="Cocktails" className="cocktail large icon" />
      </span>

      <span
        onClick={handleClick}
        name="Pokemon"
        className={activeDisplay === "Pokemon" ? "item active" : "item"}
      >
        <i name="Pokemon" className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
