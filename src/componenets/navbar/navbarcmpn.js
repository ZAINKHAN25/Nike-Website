import './navbarcmpn.css';
import logoofnavbar from '../brand_logo.png'

function App() {
  function tooglenavbar() {
    var navbar = document.querySelector('.navbar')
    var li = document.querySelector('.ulofnavabar li')
    navbar.classList.toggle('flexdirectionColumn');
    li.classList.toggle('toogleoful');
    console.log("Chal gya", navbar);
  }
  return (
    <div>
      <div onClick={tooglenavbar} className='tooglenav'>
        Click Me
      </div>
      <div className='navbar'>
        <div className='logo'>
          <img src={logoofnavbar} />
        </div>
        <ul className='ulofnavabar'>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <div>
          <button className='btnoflogin'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
