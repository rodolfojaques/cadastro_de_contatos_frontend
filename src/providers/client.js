import { createContext, useState } from "react"

export const ClientContext = createContext([])

export function ClienteProvider({children}){

    const userSession = JSON.parse(localStorage.getItem("UserClient"))

    const [user, setUser] = useState(userSession)

    return (
        <ClientContext.Provider value={{user, setUser}}>
            {children}
        </ClientContext.Provider>
    )
}