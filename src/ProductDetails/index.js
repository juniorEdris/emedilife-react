import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import Header from './Components/DetailsHeader';

const Detailsindex = (props) => {
  // get ID from query /productdetails?id=${product.id}`
  const query = useQuery();
  const prodID = query.get('id');

  return (
    <div className="product_details_container mt-2 mb-4">
      {/* <h2 className='text-secondary'>here is the id {prodID} </h2> */}
      <Header />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Detailsindex);
