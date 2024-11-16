import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Category.css'; // Import the external CSS file 
import Oil from '../../assets/images/category/oil.png'
import Lotion from '../../assets/images/category/lotion.png'
import Cream from '../../assets/images/category/cream.png'
export default function Category() {


  const OilProductsPath = '/oilproducts'
  const LotionProductsPath = '/lotionproducts'
  const CreamProductsPath = '/creamproducts'

  return (
    <>

      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
          <div className='col-md-12'>

            <div className='row'>

              <div className='col-md-4 mb-4'>
                <div className="card">
                  <div className="card-image-wrapper">
                    <img src={Oil} className="card-img-top" alt="Oil" />
                    <div className="card-overlay">
                      <div className="card-body">
                        <Link to={OilProductsPath} className="btn">OIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className="card">
                  <div className="card-image-wrapper">
                    <img src={Lotion} className="card-img-top" alt="Oil" />
                    <div className="card-overlay">
                      <div className="card-body">
                        <Link to={LotionProductsPath} className="btn">LOTION</Link>
                      </div>
                      <span>Coming Soon...</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className="card">
                  <div className="card-image-wrapper">
                    <img src={Cream} className="card-img-top" alt="Oil" />
                    <div className="card-overlay">
                      <div className="card-body">
                        <Link to={CreamProductsPath} className="btn">CREAM</Link>
                      </div>
                      <span>Coming Soon...</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
