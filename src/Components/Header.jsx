

function Home() {
  
  let header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });

  /** Menu  */
  // Menu
  

  return (
    <body>
      <div className='Header'>
        <header >
          <h1>Skills</h1>
          <nav className='nav'>
              <a href='#'>Overview</a>
              <a href='#'>Features</a>
              <a href='#'>About</a>
              <i className='bx bx-menu' id="menu-icon"></i>
          </nav>
          
        </header>
      </div>
    </body>
  )
}

export default Home