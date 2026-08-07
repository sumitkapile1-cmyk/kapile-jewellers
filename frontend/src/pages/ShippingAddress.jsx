import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Shipping.css";

function ShippingAddress() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    saveAddress: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit mobile number";

    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.address1.trim())
      newErrors.address1 = "Address is required";

    if (!form.city.trim())
      newErrors.city = "City is required";

    if (!form.state.trim())
      newErrors.state = "State is required";

    if (!/^[0-9]{6}$/.test(form.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigate("/payment");
    }
  };

  return (
    <div className="shipping-container">

      <div className="shipping-box">

        <h1>Shipping Address</h1>

        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
          <small>{errors.fullName}</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
          />
          <small>{errors.phone}</small>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>
        </div>

        <div className="form-group">
          <textarea
            name="address1"
            placeholder="Address Line 1"
            value={form.address1}
            onChange={handleChange}
          />
          <small>{errors.address1}</small>
        </div>

        <textarea
          name="address2"
          placeholder="Address Line 2 (Optional)"
          value={form.address2}
          onChange={handleChange}
        />

        <div className="row">

          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <small>{errors.city}</small>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />
            <small>{errors.state}</small>
          </div>

        </div>

        <div className="row">

          <div className="form-group">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
            />
            <small>{errors.pincode}</small>
          </div>

          <input
            type="text"
            name="landmark"
            placeholder="Landmark (Optional)"
            value={form.landmark}
            onChange={handleChange}
          />

        </div>

        <label className="save-address">
          <input
            type="checkbox"
            name="saveAddress"
            checked={form.saveAddress}
            onChange={handleChange}
          />
          Save this address for future
        </label>

        <button
          className="continue-btn"
          onClick={handleSubmit}
        >
          Continue to Payment
        </button>

      </div>

    </div>
  );
}

export default ShippingAddress;