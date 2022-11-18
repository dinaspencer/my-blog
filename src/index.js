import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDxQyrdi0bpf_m8oWzFK6_ABeM67a_QOUE",
  authDomain: "my-react-blog-3c4f8.firebaseapp.com",
  projectId: "my-react-blog-3c4f8",
  storageBucket: "my-react-blog-3c4f8.appspot.com",
  messagingSenderId: "194053054056",
  appId: "1:194053054056:web:4ba402577af68d80dbe5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
