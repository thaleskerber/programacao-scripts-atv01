import { useContext } from "react";
import { Contexto } from "../contexto"

function UseLoteria() {
    const context = useContext(Contexto)
    return context;
}

export { UseLoteria }