import {useParams } from 'react-router-dom';
import { ITEMS } from '../data/itemdata';
function Itempage(){
    let { id } = useParams();
    // console.log(id);
    const index=ITEMS.findIndex(x => x.id ===id);
    console.log(ITEMS);
    console.log(id);
    console.log(index);
    return(
        <>
       <h1>item:{ITEMS[index].title}</h1>
       <h1>Deacription:{ITEMS[index].discription}</h1>
        <p>{id}</p>

        </>
    )
}

export default Itempage;