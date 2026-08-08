function Display({valor, aoClicar}:{valor:string, aoClicar: ()=> void}){
    return(
        <div className="display" onClick={aoClicar}>{valor || <span className="placeholder"> 0</span>}</div>
    )
}
export default Display