import "./page-loteria-styles.css"
import InfoLoteria from "../components/info-loteria/info-loteria";
import { UseLoteria } from "../hooks/useLoteria";
import ResultadosLoteria from "../components/resultados-loteria/resultados-loteria";

export const PageLoteria = () => {
  const { megasena, lotofacil } = UseLoteria()

  return (
    <>
      <Loteria loteria={megasena} />
      <Loteria loteria={lotofacil} />
    </> 
  )
}

const Loteria = (props: any) => {
  return (
    <>
      <div className="loteriaContainer">
        <InfoLoteria item={props.loteria} />
        <ResultadosLoteria item={props.loteria} />
      </div>
      <div className="loteriaSeparador" />
    </>
  )
}