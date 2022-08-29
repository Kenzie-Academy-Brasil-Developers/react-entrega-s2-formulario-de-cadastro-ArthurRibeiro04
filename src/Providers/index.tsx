import { BaseProvider } from "./BaseContext";
import { TechsProvider } from "./TechsContext";
import { ReactNode } from 'react'

interface ProviderProps{
    children: ReactNode
}

export const Provider = ({children}: ProviderProps) => {
    return(
        <TechsProvider>
            <BaseProvider>
            {children}
            </BaseProvider>
        </TechsProvider>
    )
}