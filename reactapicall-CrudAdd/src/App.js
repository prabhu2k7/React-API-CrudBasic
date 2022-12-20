import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/users", {
        method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
        body: JSON.stringify({
          "id": 1,
          "name": name,
          "cardNumber":  email,
          "limitVal":  mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
        window.location.reload();
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    //const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    const apiUrl = `http://localhost:8080/api/users`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);


  return (
    <div className='App'>
      <div className='list-head'>
        <h1>CreditCard Systems</h1>
      </div>
      
     
      
      <form onSubmit={handleSubmit}>
      <tbody>
        <tr>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        </tr>
        <tr>
        <input
          type="text"
          value={email}
          placeholder="Card Number"
          onChange={(e) => setEmail(e.target.value)}
        />
          </tr>
          <tr>
        <input
          type="text"
          value={mobileNumber}
          placeholder="Limit"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
          </tr>
</tbody>
        <button type="submit">Add</button>

        <div className="message">{message ? <p>{message}</p> : null}
        </div>
      </form>


      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
   
 <h1>Existing Cards</h1>
    </div>
  );
}

export default App;