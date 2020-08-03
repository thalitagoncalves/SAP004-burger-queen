import React from 'react';
import firebase from '../config';
import { useHistory } from 'react-router-dom';

function Hall() {

  const history = useHistory();

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  const logOut = (event) => {
    event.preventDefault();
    return signOut();
  }

  return (
    <>
      <h1>Hall</h1>
      <button onClick={logOut}>Sair</button>
    </>
  )
}

export default Hall;