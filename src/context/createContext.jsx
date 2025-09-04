import { createContext, useState } from 'react';

export const CreateContext = createContext()

export const CreateProvider = ({children}) => {
    const [functions, setFunctions] = useState({
        create: () => {},
        get: () => {},
        param: []
    })
    
    return (
        <CreateContext.Provider value={{
            functions,
            setFunctions
        }}>
            {children}
        </CreateContext.Provider>
    )
}