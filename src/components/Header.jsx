import '../App.css';

const Header = () => {

    const logo = "https://files.catbox.moe/pmefl9.png";
    return(
        <div className="header-container" style={{textAlign:'center', marginTop:20}}> 
            <img src={logo} alt="logo" style={{height:140}}/>
        </div>
    )
}

export default Header;