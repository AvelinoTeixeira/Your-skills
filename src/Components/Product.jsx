import Saly16 from '../assets/Saly16.png'
import Saly12 from '../assets/Saly12.png'



function Product() {
  return (
    <div className='product'>
      <section>
        <div className='many'>
        <img src={Saly12} alt="" />
          <h1>We have been <br /> improving our product <br /><span>for many years</span></h1>
          <p>On the other hand, we dwnounce with righteous indignation <br /> and dislike men who are so beguiled and demoralized</p>
          <button  className='button'>Get Started</button>
        </div>

          <div className='time'>
            <img src={Saly16} alt="" />
            <h1>Your can practice at any <br /> <span>time convenient for you</span></h1>
            <p>On the other hand, we dwnounce with righteous indignation <br /> and dislike men who are so beguiled and demoralized</p>
            <button className='button'>Get Started</button>
          </div>
      </section>
    </div>
  )
}

export default Product