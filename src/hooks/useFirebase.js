import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initialization
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

// google log in
    const handleGoogleSignin =  () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // logout user
    const Logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    // observer for user authentication
    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        setIsLoading((false));
        return () => unsubscribe
    }, [auth])

    return {
        user,
        isLoading,
        Logout,
        handleGoogleSignin
    }
}

export default useFirebase;