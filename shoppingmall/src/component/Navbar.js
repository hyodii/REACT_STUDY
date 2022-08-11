import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아","아동", "H&M Home", "Sale", "지속가능성"]
    const  navigate = useNavigate()
    const goToLogin = ()=>{
      navigate("/login")
  }
    const search = (event)=> {
      if(event.key ==="Enter"){
        // 입력한 검색어를 읽어와서
        let keyword = event.target.value;
        console.log("keyword", keyword);

        //url을 바꿔준다
        navigate(`/?q=${keyword}`)
      }
    }
    return (
        <div>
            <div>
                <div class="login" onClick={goToLogin}>
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
                <div className="menu-area">

                    <ul className="li">
                        {menuList.map((menu) =>(
                                <li>{menu}</li>
                            ))}
                    </ul>
                </div>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar