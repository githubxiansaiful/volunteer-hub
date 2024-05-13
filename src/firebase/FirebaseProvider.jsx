import { FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {

    // Auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [userCurrent, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Update Profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL:image
          })
    }

    // Create user with email and password
    const createUsers = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User with email and password
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Github Login
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    // Facebook Login
    const facebookLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, facebookProvider)
    }

    // Log Out User
    const logOutUser = () => {
        setLoader(true);
        setUser(null);
        signOut(auth);
    }

    // Observing auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userCurrent => {
            setUser(userCurrent);
            // console.log(userCurrent);
            setLoader(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // Pass Auth Info
    const authInfo = {
        createUsers,
        loginUser,
        googleLogin,
        githubLogin,
        logOutUser,
        facebookLogin,
        updateUserProfile,
        loader,
        userCurrent
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;