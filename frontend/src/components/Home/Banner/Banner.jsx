import './Banner.scss'
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Take te best of our headphones and more! Make your music be so real
            than the galaxy. With the new collection, you can surf on the waves
            of the pop and the fire of the rock.
          </p>
          <div className="cta">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v">Shop Now</div>
          </div>
        </div>
        <img
          src={BannerImg}
          alt="Banner image of headphone"
          className="banner-img"
        />
      </div>
    </div>
  )
}

export default Banner
