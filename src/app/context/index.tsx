"use client"

import { ReactNode, createContext, useContext, useState } from 'react';

type DataType = {
    firstName: string
}

interface ContextProps {   
    openAlert: boolean;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}


const initialContextValues: ContextProps = {  
    openAlert: false, // varsayılan olarak false veya başka bir başlangıç değeri
    setOpenAlert: () => { }, // varsayılan olarak boş bir fonksiyon
};

const GlobalContext = createContext<ContextProps>(initialContextValues);

export const GlobalContextProvider = ({ children }: { children: ReactNode })=> {

    const [openAlert, setOpenAlert] = useState<boolean>(true);

    return (
        <GlobalContext.Provider value={{ openAlert, setOpenAlert }} >
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext)
