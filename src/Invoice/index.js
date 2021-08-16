import InvoiceHeader from './Components/Header';
import InvoiceMiddle from './Components/Main';
import './invoice.css'
const Invoice = (props) => {
    return (
        <div className="invoice_wrapper container pt-3 ">
            <InvoiceHeader/>
            <InvoiceMiddle/>
            <footer className={'pb-5'}>
                <div className="invoice_total text-right row no-gutter">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12"></div>
                    <div className="invoice_total_child col-md-4 col-12">
                        <div className="invoice_total_child_heading">
                            <span>Invoice Summery</span>
                        </div>
                        <div className="invoice_total_child_body pl-2 pr-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Sub total</span>
                                <span>100</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Discount</span>
                                <span>100</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>100</span>
                            </div>
                            <div className="invoice_total_border d-flex align-items-center justify-content-between">
                                <span>Total</span>
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signature_section text-center">
                    <span className=''>"This is computer Generated Invoice. Please Signature it"</span>
                </div>
            </footer>
        </div> 
     );
}
 
export default Invoice;