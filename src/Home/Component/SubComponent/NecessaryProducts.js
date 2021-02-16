import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard'

const NecessaryProducts = (props) => {
    const products=[
        {
            id:1,
            image:'img-1.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:true,
        },
        {
            id:2,
            image:'img-2.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:true,
        },
        {
            id:3,
            image:'img-3.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
        {
            id:4,
            image:'img-4.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
        {
            id:5,
            image:'img-5.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
        {
            id:6,
            image:'img-6.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
        {
            id:7,
            image:'img-7.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
        {
            id:8,
            image:'img-1.png',
            name:'Omron HEM 7120 Fully Automatic-100mg',
            mg:100,
            brand:'Omoron',
            price:149,
            previous_price:288,
            best_seller:false,
        },
    ]
    return (
        <div className=''>
            <div className="row">
                    {
                        products.map(product=>(
                            <div className="col-6 col-md-3">
                                <ProductCard key={product.id} product={product}/>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NecessaryProducts)
