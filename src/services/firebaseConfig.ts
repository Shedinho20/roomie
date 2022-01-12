export const firebaseConfig =
  process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development"
    ? {
        //   apiKey: process.env.REACT_APP_apiKey,
        //   authDomain: process.env.REACT_APP_authDomain,
        //   projectId: process.env.REACT_APP_projectId,
        //   storageBucket: process.env.REACT_APP_storageBucket,
        //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
        //   appId: process.env.REACT_APP_appId,
        // measurementId: process.env.REACT_APP_measurementId,
        apiKey: "AIzaSyBGihdJurfqfm6UcUl85JPagmSQh2jz-H8",
        authDomain: "roomie-bc7d7.firebaseapp.com",
        projectId: "roomie-bc7d7",
        storageBucket: "roomie-bc7d7.appspot.com",
        messagingSenderId: "66710956477",
        appId: "1:66710956477:web:d1e42571e44e9ccd2ccad4",
        measurementId: "G-Z242T0KCGE",
      }
    : {};
