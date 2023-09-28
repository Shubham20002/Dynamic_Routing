import {useParams } from 'react-router-dom'
function Itempage(){
    let { id } = useParams();
    // console.log(id);
    return(
        <>
        <p>{id}</p>
        </>
    )
}

export default Itempage;