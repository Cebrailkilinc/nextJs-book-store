"use client"

import { ReactNode, createContext, useContext, useState } from 'react';

interface ContextProps {
    alertMessage: string,
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
    alertType: "info" | "warning" | "success" | "error" | "loading"
    setAlertType: React.Dispatch<React.SetStateAction<"info" | "warning" | "success" | "error" | "loading">>,
    openAlert: boolean;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}


const initialContextValues: ContextProps = {
    openAlert: false,
    alertMessage: "",
    alertType: "error",
    setAlertType: () => { },
    setAlertMessage: () => { }, // varsayılan olarak false veya başka bir başlangıç değeri
    setOpenAlert: () => { },
    // varsayılan olarak boş bir fonksiyon
};

const GlobalContext = createContext<ContextProps>(initialContextValues);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertType, setAlertType] = useState<"info" | "warning" | "success" | "error" | "loading">("info")
    return (
        <GlobalContext.Provider value={{
            openAlert,
            setOpenAlert,
            alertType,
            setAlertType,
            alertMessage,
            setAlertMessage,
        }} >
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext)
