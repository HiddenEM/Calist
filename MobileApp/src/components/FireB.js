import {app, db} from './FireBConfig.js';
import {ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';

function pushNewUserData() {
  db.ref('/userData').push({
    email: global.email,
    username: global.username,
    gender: global.gender,
    currentWeight: global.currentWeight,
    weightGoal: global.weightGoal,
    size: global.size
  });
}

export function manage_logout(navigation)
{
  auth()
  .signOut()
  .then(() => {
    ToastAndroid.show('Déconnecté avec succès', 3);
    console.log('Déconnecté avec succès');
    navigation.navigate('Login');
  });
}

export function manage_login(navigation, email, password)
{
  auth().signInWithEmailAndPassword(email, password)
  .then((userInfo, value) => {
    console.log(value);
    global.username = userInfo.user.displayName;
    navigation.navigate('App');
  })
  .catch(error => {
    if (error.code === 'auth/invalid-email') {
      console.log('Adresse email invalide');
    }
    if (error.code === 'auth/wrong-password') {
      console.log('Mot de passe invalide');
    }
    console.error(error);
  });
}

export function manage_register(navigation, email, password)
{
  auth().createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      userInfo.user.updateProfile({ displayName: global.username.trim() })
        .then(() => {
          navigation.navigate('GetInfo');
        })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Cette adresse email existe déjà !');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('Adresse email invalide');
      }
  
      console.error(error);
    });
}

export function manage_gender(navigation)
{
  if (global.gender != -1)
    navigation.navigate('GetSize');
}

export function manage_size(navigation)
{
  navigation.navigate('GetCurrentWeight');
}

export function manage_currentWeight(navigation)
{
  navigation.navigate('GetWeightGoal');
}

export function manage_weightGoal(navigation)
{
  pushNewUserData();
  navigation.navigate('App');
}