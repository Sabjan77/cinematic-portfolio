import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvxEoiUJ_u3xix-VEQGkgv8jnizIGz-Ec",
  authDomain: "sabjan-portfolio-website.firebaseapp.com",
  projectId: "sabjan-portfolio-website",
  storageBucket: "sabjan-portfolio-website.firebasestorage.app",
  appId: "1:953301887928:web:84f939f6ac5f8474fbbd4d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);