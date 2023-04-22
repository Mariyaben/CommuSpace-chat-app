import React, { useState } from "react";
import "./settings.css";

function Settings() {
  //useState for controlling the chat screen background color
  const [bgColor, setBgColor] = useState("#ffffff");

  //handler function for changing the chat screen background color
  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div className="settings-container">
      <div className="section-container">
        <h2>User Account</h2>
        {/*Form for updating user account details*/}
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Update</button>
        </form>
      </div>

      <div className="section-container">
        <h2>Profile Changes</h2>
        {/*Form for updating profile details*/}
        <form>
          <label htmlFor="profile-pic">Profile Picture:</label>
          <input type="file" id="profile-pic" name="profile-pic" />

          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio"></textarea>

          <button type="submit">Update</button>
        </form>
      </div>

      <div className="section-container">
        <h2>Chat Screen Background Color Changer</h2>
        {/*Input field for changing the chat screen background color*/}
        <label htmlFor="bg-color">Background Color:</label>
        <input
          type="color"
          id="bg-color"
          name="bg-color"
          value={bgColor}
          onChange={handleColorChange}
        />

        {/*Preview box for showing the selected color*/}
        <div
          className="color-preview"
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
    </div>
  );
}

export default Settings;
