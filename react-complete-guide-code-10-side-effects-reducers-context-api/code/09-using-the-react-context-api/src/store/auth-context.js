import React from "react";

// NOTE: Whilst Auth-Context itself is not a component, it is an object that will contain a component.

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
