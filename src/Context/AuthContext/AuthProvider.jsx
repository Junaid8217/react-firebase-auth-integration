import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    // //get current user info
    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('Inside Observer if', currentUser)
    //     }
    //     else {
    //         console.log('Inside Observer else', currentUser)
    //     }

    // }
    // )

    useEffect(() => {
        //step 1: Observer set
        //step 2: set the observer in a variable
        //step 3: return and call the variable so that you can clear the ref

        //set the observer
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current user in auth state change ", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        //clear the observer on unmount
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        // createUser: createUser
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;