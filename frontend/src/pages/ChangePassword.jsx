import { useState } from "react";
import "../styles/ChangePassword.css";

function ChangePassword() {

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }

    alert("Password Changed Successfully!");

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="change-password-page">

      <div className="change-password-card">

        <h1>Change Password</h1>

        <form onSubmit={handleSubmit}>

          <label>Current Password</label>

          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            required
          />

          <label>New Password</label>

          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            required
          />

          <label>Confirm New Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ChangePassword;