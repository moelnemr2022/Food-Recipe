
  import './Slider.css'

  import img1 from './imges/img1.jpg'
  import img2 from './imges/img2.webp'
  import img3 from './imges/img3.jpg'


  function Slider() {


    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>



          <div className="carousel-inner">
            <div className="carousel-item active height: 600px width: 800px "  data-bs-interval="3000">
              <img src={img1} className="d-block w-100 c-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Traditional moroccan food</h5> */}
               
              </div>
            </div>

            <div className="carousel-item height: 600px width: 800px "  data-bs-interval="3000">
              <img src={img2}  className="d-block w-100 c-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Street food accompaniments</h5> */}

              </div>
            </div>
            <div className="carousel-item height: 600px width: 800px " data-bs-interval="3000">
              <img src={img3} className="d-block w-100 c-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Air Fryer Beef Flautas</h5> */}

              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>


          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
 
      </div>
    )
  }

  export default Slider
