import { createContext, useEffect, useState } from "react";
import loterias from "../services/loterias";
import { loteriaProps, Props } from "../types";
import { Carregando } from "../components/carregando/carregando";

const Contexto = createContext({} as loteriaProps);

function Provider({ children }:any) {
    const [megasena, setMegasena] = useState({} as Props)
    const [lotofacil, setLotofacil] = useState({} as Props)
    const [carregando, setCarregando] = useState(true)
    
    useEffect(() => {
        (
        async () => {
            const resp = await loterias.get()
            setMegasena(resp.megasena);
            setLotofacil(resp.lotofacil);
            setCarregando(false);
        })();
    },[])

    const CarregarComponentes = () => {
        if(carregando){
          return <Carregando />
        }else{
          return <>{children}</>
        }
      }

    return (
        <Contexto.Provider value={{ megasena, lotofacil, carregando}}>
            <CarregarComponentes />
        </Contexto.Provider>
    );
}

export { Contexto, Provider };