import firebase from './config'

const isAuth = () => {
  if (firebase.auth().currentUser) {
    return true;
  } else {
    return false;
  }
}

export default isAuth;