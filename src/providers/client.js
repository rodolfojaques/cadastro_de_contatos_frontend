import { createContext } from "react"

export const ClientContext = createContext([])

export function ClienteProvider({children}){

    return (
        <ClientContext.Provider value={{}}>
            {children}
        </ClientContext.Provider>
    )
}