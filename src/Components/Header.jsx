

function Home() {
  
  let header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });
  return (
    <body>
      <div className='Header'>
        <header >
          <h1>Skills</h1>
          <a href='#' className='buttonup'>Sign Up</a>
          <nav className='nav'>
              <a href='#'>Overview</a>
              <a href='#'>Features</a>
              <a href='#'>About</a>
              <a href='#'>Pricing</a>
              <i className='bx bx-menu' id="menu-icon"></i>
          </nav>
          
        </header>
      </div>
    </body>
  )
}

export default Home