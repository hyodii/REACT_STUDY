import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "유아","다음"]
    return (
        <div>
            <div>
                <div class="login">
                    <FontAwesomeIcon icon={faUser}/>
                    <div>로그인</div>
                </div>
            </div >

            <div className="logo">
                <img
                    width={100}
                    src="https://www2.hm.com/hm-logo.png"
                />
            </div>

            <div>
                <div className="list">

                    <ul className="li">
                        {menuList.map((menu) =>(
                                <li>{menu}</li>
                            ))}
                    </ul>
                </div>

                <div>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text"/>

                </div>
            </div>
        </div>
    )
}

export default Navbar