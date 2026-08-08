function BotaoPadrao ({texto,aoClicar}:{texto: string, aoClicar: () => void}){

    return(
        <button className='botao-padrao' onClick={aoClicar}> {texto}</button>



    )
}
export default BotaoPadrao