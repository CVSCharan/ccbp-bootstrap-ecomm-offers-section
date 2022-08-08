import './App.css';

function App() {
  return (
    <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-1 order-md-2">
                    <div className="d-flex flex-row justify-content-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-special-img.png" className="img1" alt="img1" />
                    </div>
                </div>

                <div className="col-12 col-md-6 order-md-3">
                    <div className="d-flex flex-row justify-content-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-appliances-img.png" className="img2" alt="img2" />
                    </div>
                </div>

                <div className="col-12 col-md-5 order-md-1">
                    <h1 className="h1">BEST NEW YEAR SPECIAL OFFERS</h1>
                    <p className="p1">Best time to buy. Save upto <span className="bld-t">70% Cash</span></p>
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-credit-card-img.png" className="img3" alt="img3" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
