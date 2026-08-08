import { Link } from 'react-router-dom'
function NomeSiteClicavel({texto,para}:{ texto: string, para:string}){
    return(
        <Link to={para} className='nome-site-clicavel'> <h1> {texto}</h1></Link>



    )

}
export default NomeSiteClicavel