import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({}); // State to store form data
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setErrorMessage(""); // Clear previous error messages
    setLoading(true); // Start loading spinner

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data); // Expected to see { message: 'User created successfully' }
      } else {
        console.error("Error:", data.message || "Something went wrong");
        setErrorMessage(data.message || "Something went wrong"); // Set error message to display to user
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage("There was an issue with the server. Please try again later.");
    }
    finally {
      setLoading(false); // Stop loading spinner
    }

  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>

      {/* Show error message if there is one */}
      {errorMessage && (
        <div className="bg-red-200 text-red-800 p-3 rounded-lg mb-4">
          <strong>{errorMessage}</strong>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <button disabled={loading} className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-90">
         
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
