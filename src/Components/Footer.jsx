import logo from '../assets/logo.png'

function Footer () {
  return (
    <footer>
      <div className='footer'>
      <img src={logo} alt="" />
        <h1>Developer</h1>
          <p>Bui must explain to you how all this  mistaken idea of denouncing <br /> pleassure and praising <br />
          pain was born and will give you a complete account of the system</p>
          <div className='Plataform'>
            <h3>Plataform</h3>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Pricing</a>
          </div>
          <div className='Help'>
            <h3>Help</h3>
            <a href="#">Hows does it work?</a>
            <a href="#">Where to ask questions?</a>
            <a href="#">How to play?</a>
            <a href="#">What is needed for this?</a>
          </div>
          <div className='Contacts'>
          <h3>Contacts</h3>
            <a href="#">(716)532-3577</a>
            <a href="#">116 Archer Rd</a>
            <a href="#">Broadalbin</a>
            <a href="#">New You(NY)</a>
            <a href="#">12025</a>
          </div>
          <div className='buttons'>
          <input className='buttonY' type="text"  placeholder='Your email'/>
            <button className="buttonS">Subscribe</button>
            
          </div>
          <hr />
          <h5>Developer 2015-2022.All rights reserved</h5>

      </div>
    </footer>
  )
}

export default Footer