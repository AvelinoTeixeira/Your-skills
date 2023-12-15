import Saly1 from '../assets/Saly1.png'

function Home () {
  return (
    <div className="developed">
      <div className='itens'>
        <h1>Develop your skills <br /> without diligence</h1>
        <p>Bui must explain to you how all this  mistaken idea of denouncing pleassure and praising <br />
        pain was born and will give you a complete account of the system</p>
        <img src={Saly1} alt="" />
        <div className='buttons'>
          <button className="button1">Get Started</button>
          <button className="button2">Discount</button>
        </div>
         
      </div>
    </div>
  )
}

export default Home