import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
        })
        //clear the observer on unmount
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        // createUser: createUser
        createUser,
        signInUser,
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