
'use client'
import {useState, createContext} from 'react';

//export the context
export const ActiveSectionContext = createContext(null);

//the children are all the components that will get access to some value
//export default the provider
export default function ActiveSectionContextProvider({children}) {
    //the active section of the navbar
    const [isActive, setIsActive] = useState("Home");

    return (
        <ActiveSectionContext.Provider
        value={{
            //on passe à la fois isActive et isActive car on veut acceder mais aussi le muter quand le component est dans view
            isActive,
            setIsActive
        }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}
