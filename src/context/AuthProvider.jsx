import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const AuthContext = createContext(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
	const unsubscribe = onAuthStateChanged(auth, (user) => {
		setUser(user);
		console.log(user);
		setLoading(false);
	});
	return () => {
		return unsubscribe();
	};
}, []);
const authInfo = { user };
const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
