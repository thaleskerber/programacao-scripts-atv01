import { Props } from "../../types"
import "./resultados-loteria-styles.css"

const ResultadosLoteria = (props: any) => {

    const loteria: Props = props.item

    function exibirResultado() {
        if(loteria.acumulado){
            return "ACUMULOU!"
        }

        if (loteria.quantidadeGanhadores > 0) {
            const quantidadeGanhadores = loteria.quantidadeGanhadores
            return `${quantidadeGanhadores} GANHADOR${quantidadeGanhadores > 1 ? 'ES' : ''}`
        } else{
            return "ACUMULOU!"
        }
    }

    const WrapResultados = () => {
        if(loteria.tipoJogo === 'MEGA_SENA'){ // verifica se o jogo é mega sena

            return (
                <div className="megasenaWrapper">
                    {loteria.dezenas.map((item) => (
                        <div key={item} className="resultadosMegasena">
                            {item}
                        </div>
                    ))}
                </div>
            )
        }else { // entra no caso do jogo ser lotofacil
            let index = 0

            return (
                <div className="lotofacilWrapper">
                    {loteria.dezenas.map((item) => {
                        index++;

                        return (
                            <div key={item} className={index < 11 ? "resultadosLotofacil bordaResultadosLotofacil" : "resultadosLotofacil"}>
                                {item}
                            </div>
                    )})}
                </div>
            )
        }
      }

    return (
        <div className={loteria.tipoJogo === 'MEGA_SENA' ? "megasenaContainer" : "lotofacilContainer"}>
            <WrapResultados />
            <h1>{exibirResultado()}</h1>
            <p>Concurso {loteria.numeroDoConcurso} - {loteria.dataPorExtenso}</p>
        </div>
    );
}

export default ResultadosLoteria;