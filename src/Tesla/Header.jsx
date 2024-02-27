import React, { useState } from 'react'
import "./header.css"
function Header() {
  const [opensidebar,setopensidebar] = useState(false)

function showMenu(e){
  e.preventDefault()
  setopensidebar(true);
}
function closeMenu() {
  setopensidebar(false);
}

  return (
    <>
    <div className='head'>
    
<img src="src/Tesla/teslaImages/logo.svg" alt="" />

<ul>

<li><a href="#">Model S</a></li>
<li><a href="#">Model 3</a></li>
<li><a href="#">Model X</a></li>
<li><a href="#">Model Y</a></li>
<li><a href="#">Solar Roof</a></li>
<li><a href="#">Solar Panels</a></li>

</ul>

<ul>

<li><a href="#">Shop</a></li>
<li><a href="#">Account</a></li>
<li><a href="#" onClick={showMenu}>Menu</a></li>

</ul>
</div>
<ul className='sidebar' style={{right: (opensidebar) ? 0 : '-250px'}}>
<span>
          <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
</span>
<li><a href="#">Model S</a></li>
<li><a href="#">Model 3</a></li>
<li><a href="#">Model X</a></li>
<li><a href="#">Model Y</a></li>
<li><a href="#">Solar Roof</a></li>
<li><a href="#">Solar Panel</a></li>
<li><a href="#">Existing Inventory</a></li>
<li><a href="#">Used Inventory</a></li>
<li><a href="#">Trade In</a></li>
<li><a href="#">Test Drive</a></li>
<li><a href="#">Powerwall</a></li>
<li><a href="#">Commercial Energy</a></li>

</ul>
    </>
  )
}

export default Header