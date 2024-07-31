import { createContext, ReactNode, useState } from "react";

interface LanguajeContextType {
    languaje: string
    setLanguaje: (newLanguaje: string) => void 
}

export const LanguajeContext = createContext<LanguajeContextType | undefined>(undefined)

export const LanguajeProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [languaje, setLanguaje] = useState('spanish')

    return (
        <LanguajeContext.Provider value={{languaje, setLanguaje}}>
            {children}
        </LanguajeContext.Provider>
    )
}