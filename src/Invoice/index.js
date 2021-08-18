import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../PrimarySections/Utility';
import InvoiceHeader from './Components/Header';
import InvoiceFooter from './Components/InvoiceFooter';
import InvoiceMiddle from './Components/Main';
import './invoice.css'
import {connect} from 'react-redux';
import { getSingleOrderDetails } from '../Redux/Action/SingleOrderAction';
const Invoice = (props) => {
    const history = useHistory()
    const query = useQuery();
    const id = query.get('id');
    useEffect(() => {
        props.getSingleOrder(id);
      }, [id]);
    const printPage = (e) => {
        window.print();
    };
    const goBack = e => {
        history.goBack()
    }
    return (
        <div className="invoice_wrapper container pt-3 ">
            {props.loading ? <div className="full_vh d-flex align-items-center justify-content-center">
                <strong style={{fontSize:'1.2rem'}}> Invioice generating...</strong>
            </div> :
            <div className="">
            <div className="print-btn-container d-flex align-items-center justify-content-between mb-4">
            <button
            type="button"
            className="btn print-btn d-none d-md-block"
            onClick={goBack}>
            <i className="fas fa-arrow-circle-left"></i> Back
          </button>
            <button
            type="button"
            className="btn print-btn d-none d-md-block"
            onClick={printPage}>
            <i className="fas fa-print"></i> Print
          </button>
            </div>
            <InvoiceHeader details={props.singleorder}/>
            <InvoiceMiddle details={props.singleorder}/>
            <InvoiceFooter details={props.singleorder}/>
            </div>}
        </div> 
     );
}
 
export default connect(state => ({
    loading: state.SingleOrder.loading,
    singleorder: state.SingleOrder.orderDetails,
}), dispatch => ({
  getSingleOrder: (data) => dispatch(getSingleOrderDetails(data)),
}))(Invoice);