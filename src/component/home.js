import {NavLink} from 'react-router-dom'

function Home(){
    return(
        <>
        <h1>
        Home page</h1>
      <NavLink to='item/item1'>item 1</NavLink>
      <NavLink to='item/item2'>item 2</NavLink>
      <NavLink to='item/item3'>item 3</NavLink>
        </>
    )
}

export default Home;