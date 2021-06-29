import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { UserID } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import { GetAreaOption } from '../../Redux/Action/GetUserInfoAction';
import DeliveryDetailsInput from './SubComponents/DeliveryDetailsInput';
import PaymentMethod from './SubComponents/PaymentMethod';
import PriceDetails from './SubComponents/PriceDetails';

const CheckOutBody = (props) => {
  const [DeliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    area: '',
    address: '',
    zip: '',
    delivery_mark: '',
  });
  const [paymentType, setPaymentType] = useState('Cash on Delivery');
  useEffect(() => {
    setDeliveryDetails({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district_id || '',
      area: props.info?.area_id || '',
      address: props.info?.address || '',
      zip: props.info?.zip || '',
      delivery_mark: props.info?.delivery_mark || '',
    });
  }, [props.info]);
  useEffect(() => {
    props.getArea(DeliveryDetails.district);
    setDeliveryDetails({ ...DeliveryDetails, area: '' });
  }, [DeliveryDetails.district]);
  // CHECK EMAIL VALIDATION
  const [EmailExist, setEmailExist] = useState({});
  const emailCheck= e=> {
    API().post(`${ENDPOINTS.EMAILCHECK}?user_id=${UserID()}&email=${DeliveryDetails.email}`).then(res => {
      if (res.data.status) {
        setEmailExist({status:'available'})
      } else {
        setEmailExist({status:'already taken', error:res.data.message})
      }
    }).catch(err=> console.log(err))
  }
  return (
    <div className="checkout_body row">
      <div className="col-md-6">
        <DeliveryDetailsInput
          details={DeliveryDetails}
          setDetails={setDeliveryDetails}
          emailCheck={emailCheck}
          EmailExist={EmailExist}
        />
        <PaymentMethod type={paymentType} setType={setPaymentType} />
      </div>
      <div className="col-md-6">
        <PriceDetails details={DeliveryDetails} type={paymentType}
          emailExist={EmailExist}
          />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
});

const mapDispatchToProps = (dispatch) => ({
  getArea: (id) => dispatch(GetAreaOption(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
