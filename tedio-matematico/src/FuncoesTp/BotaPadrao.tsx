function BotaoPadrao ({texto,aoClicar,disabled}:{texto: string, aoClicar: () => void,disabled?: boolean}){
//ultima parameto é opcional pensado no botao enviar
    return(
        <button className='botao-padrao' onClick={aoClicar} disabled={disabled}> {texto}</button>



    )
}
export default BotaoPadrao