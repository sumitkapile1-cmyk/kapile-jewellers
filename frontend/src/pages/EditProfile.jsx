import { useState } from "react";
import "../styles/EditProfile.css";

function EditProfile() {

  const [user, setUser] = useState({
    name: "Sumit Kapile",
    email: "sumit@gmail.com",
    phone: "8999571456",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully");
  };

  return (
    <div className="edit-profile-page">

      <div className="edit-profile-card">

        <h1>Edit Profile</h1>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProfile;