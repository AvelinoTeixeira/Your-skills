import logo from '../assets/logo.png'

function Home() {
  
  let header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });
  return (
    <div className='Header'>
      <header >
        <img src={logo} alt="" />
        <h1>Developer</h1>
        <nav className='nav'>
            <a href='#'>Overview</a>
            <a href='#'>Features</a>
            <a href='#'>About</a>
            <a href='#'>Pricing</a>   
            <a href='#' className='button'>Sign Up</a>
        </nav>
      
      </header>
    </div>
  )
}

export default Home