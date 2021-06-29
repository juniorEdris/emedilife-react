import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PopUp } from '../PrimarySections/SectionUtils/PopUp';
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { guestCartItem } from '../Redux/Action/BasketAction';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import { clearSuccessPrescription } from '../Redux/Action/PrescriptionUploadAction';
import { guestWishItem } from '../Redux/Action/WishListAction';
import PreviewSection from './Components/PreviewSection';
import UploadSection from './Components/UploadSection';
import './uploadSection.css';
const PrescriptionUpload = (props) => {
  useEffect(() => {
    toTheTop();
    // local products to server
    props.localCartList?.length > 0 && props.guestCartSubmit();
    props.localWishList?.length > 0 && props.guestWishSubmit();
props.getCartItems();
  
  }, []);
  return (
    <div className="container-md-fluid prescription_body">
      {props.loading && <SpinLoader />}
      {props.success && (
        <PopUp response={props.success} close={props.closePopup} />
      )}
      <div className="prescription_upload row">
        <UploadSection />
        <PreviewSection />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Prescription.uploadloading,
  status: state.Prescription.prescriptionStatus,
  success: state.Prescription.prescriptionSuccess,
  User: state.User.user,
  localCartList: state.Basket.localBasket,
  localWishList: state.Wishlist.localWishlist,
  geustListloading: state.Basket.loading,
});

const mapDispatchToProps = (dispatch) => ({
  closePopup: () => dispatch(clearSuccessPrescription()),
  getCartItems: () => dispatch(getCartItems()),
  guestCartSubmit: (array) => dispatch(guestCartItem(array)),
  guestWishSubmit: (array) => dispatch(guestWishItem(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);

