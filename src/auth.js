import firebase from './config'



/* const isAuth = (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    const uid = firebase.auth().currentUser.uid;
    if (user) {
      firebase.firestore().collection('users').doc(uid).get()
        .then((doc) => doc.data().position)
        .then((position) => position === 'atendente') ? props.useHistory().push('/hall') : props.useHistory().push('/kitchen');
    }
  });
} */

const isAuth = () => {
  if (firebase.auth().currentUser) {
    return true;
  } else {
    return false;
  }
}

export default isAuth;