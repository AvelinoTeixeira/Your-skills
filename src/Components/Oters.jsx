import Saly2 from '../assets/Saly2.png'
import Saly3 from '../assets/Saly3.png'
import Saly4 from '../assets/Saly4.png'


function Oters () {
  return (
    <div className='oters'>
      <section >
        <h1>Why we <br /> are batter <br /> than oters</h1>
        <p>On the other hand, we dwnounce with <br /> righteous indignation and dislike men who <br /> are so beguiled and demoralized</p>
        <div className='elements'>
          <div className='Study'>
          <img src={Saly2} alt="" />
          <h3>Convenient <br /> study <br /> schedule</h3>
          </div>
          <div className='Checked'>
          <img src={Saly3} alt="" />
          <h3>Checked <br /> homework <br /> by teachers</h3>
          </div>
          <div className='Modern'>
          <img src={Saly4} alt="" />
          <h3>Modern <br /> internet <br /> plataform</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Oters