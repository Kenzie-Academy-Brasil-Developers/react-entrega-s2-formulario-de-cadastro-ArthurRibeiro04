import { BaseProvider } from "./BaseContext";
import { TechsProvider } from "./TechsContext";

export const Provider = ({children}) => {
    return(
        <TechsProvider>
            <BaseProvider>
            {children}
            </BaseProvider>
        </TechsProvider>
    )
}