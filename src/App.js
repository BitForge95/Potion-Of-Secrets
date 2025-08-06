import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [secretInput, setSecretInput] = useState("");
  const [randomSecret, setRandomSecret] = useState("");
  const [message, setMessage] = useState("")


  const fetchRandomSecret = async () => {
  try {
    const res = await axios.get(
      "https://potion-of-secrets-backend-production.up.railway.app/api/secret"
    );
    setRandomSecret(res.data.data || "No secrets yet!");
  } catch (error) {
    console.error("Error fetching secret:", error);
    setRandomSecret("Error fetching secret");
  }
};

const addSecret = async (e) => {
  e.preventDefault();
  if (!secretInput) return;

  try {
    await axios.post(
      "https://potion-of-secrets-backend-production.up.railway.app/api/secret",
      { randomSecret: secretInput } 
    );
    setSecretInput("");
    setMessage("Your Secret is Safe within us. Like a Horcrux!");
    fetchRandomSecret();
  } catch (error) {
    setMessage("Sorry, please try adding your Secret again");
    console.error("Error adding secret:", error);
  }
};

 
  useEffect(() => {
    fetchRandomSecret();
  }, []);

  return (
    <div className="Main-Container">
      <h1>You Tell us a Secret, We'll Tell you One</h1>

      <form onSubmit={addSecret} className="Form-Container">
        <input
          type="text"
          value={secretInput}
          onChange={(e) => setSecretInput(e.target.value)}
          placeholder="Enter your secret"
          className="Input-Box"
          
        />
        <p className="sub-message">{message}</p>
        
        <button type="submit" className="Submit-Button">
          Add Secret
        </button>
      </form>

      <div>
        <h2 className="Random-Secret-Heading">Random Secret:</h2>
        <p className="Random-Secret">{randomSecret || "No secrets yet!"}</p>
        <button onClick={fetchRandomSecret} className="Fetch-Secret-Button">
          Show Another Secret
        </button>
      </div>
    </div>
  );
}

export default App;
