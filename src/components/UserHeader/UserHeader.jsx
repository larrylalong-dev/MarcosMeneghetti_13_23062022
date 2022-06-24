import { useState } from "react";
// import ProfileForm from "../Profileform/ProfileForm";
import "./UserHeader.scss";

const UserHeader = () => {
  const [showForm, setShowForm] = useState("false");

  const handleShowForm = () => {
    setShowForm(false);
    console.log(setShowForm);
  };
  const handleHideForm = (e) => {
    e.preventDefault(true);
    setShowForm(!showForm);
    console.log(setShowForm);
  };
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      {showForm ? (
        <button className="edit-button" onClick={handleShowForm}>
          Edit Name
        </button>
      ) : (
        // <section className="form-change-name">
        <form>
          <div className="inputs-form">
            <div className="input-wrapper">
              <input type="text" id="firstname" placeholder="Tony" />
            </div>
            <div className="input-wrapper">
              <input type="text" id="lastname" placeholder="Stark" />
            </div>
          </div>
          <div className="form-buttons">
            <button className="button-form" type="submit">
              save
            </button>
            <button className="button-form" onClick={handleHideForm}>
              cancel
            </button>
          </div>
        </form>
        // </section>
      )}
    </div>
  );
};

export default UserHeader;
