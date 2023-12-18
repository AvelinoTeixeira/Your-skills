import logo from '../assets/logo.png'

function Footer () {
  return (
    <footer>
      <div className='footer'>
      <img src={logo} alt="" />
        <h1>Developer</h1>
          <p>Bui must explain to you how all this  mistaken idea of denouncing <br /> pleassure and praising <br />
          pain was born and will give you a complete account of the system</p>
          
          <div className='buttons'>
            <button className="button1">Get Started</button>
            <button className="button2">Discount</button>
          </div>
      </div>
    </footer>
  )
}

export default Footer