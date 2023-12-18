

function Home() {
  
  let header = document.querySelector('header');

  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });

  /** Menu  */
  // Menu
  let menu = document.querySelector('#menu-icon');
  let nav = document.querySelector('.nav')
  
  menu.onclick = () => {
      menu.classList.toggle('bx-x')
      nav.classList.toggle('active')
  }

  window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}

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