import React from 'react'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


const ProductSlider = (props) => {
    const options = {
        loop: false,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false,
            },
            700:{
                items:3,
            },
            900:{
                items:5,
            },
            
        },
      }
      
    return (
        <div className='product-section'>
            <OwlCarousel className='owl-theme' {...options}
            navText={['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}
            >
                {props.products.map(product=>(
                    <div className={`product-item `} id={product.id}>
                  <div className="product-thumb">
                    <Link to="/productdetails">
                      <img src={`./assets/images/products/${product.image}`} className="pri-img" alt={product.name} />
                    </Link>
                    
                    <div className="box-label">
                      <div className="label-product label_sale">
                        <span>{product.sale ? `-${product.sale}%` : '' }</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-caption">
                    <div className="product-name">
                      <h4><Link to="/" title={product.name}>{product.name}</Link></h4>
                    </div>
                    <div className="manufacture-product">
                      <span><Link to="/">by {product.brand}</Link></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
                      <span className="old-price"><span>MRP:</span><del>{product.previous_price ? `£${product.previous_price}` : ''}</del></span>
                    </div>
                    <button className="btn-cart" type="button">add to cart</button>
                  </div>
                
                </div>
                ))}
            </OwlCarousel>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSlider)
