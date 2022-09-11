import React, { useState, useContext, createContext } from "react";

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
    const [navEnabled, setNavEnabled] = useState(true);
    return (
        <NavContext.Provider value={{ navEnabled, setNavEnabled }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => {
    return useContext(NavContext);
};
