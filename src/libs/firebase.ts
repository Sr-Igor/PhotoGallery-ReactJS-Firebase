import {initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD0ECAtR9w40GQDvJv0dYcGHqIIQ6ZwPWQ",
    authDomain: "gallery-react-2.firebaseapp.com",
    projectId: "gallery-react-2",
    storageBucket: "gallery-react-2.appspot.com",
    messagingSenderId: "207777720911",
    appId: "1:207777720911:web:93d5708d908cd919d8183a"
  };

const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)