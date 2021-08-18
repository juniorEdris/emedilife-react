const InvoiceFooter = (props) => {
    let subTotal = () => {
        let allProd = [];
        props.details?.cart?.forEach((x) => {
          allProd.push(x.price * x.total_quantity);
        });
        return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      };
    return (
        <footer className={'pb-5'}>
                <div className="invoice_total text-right row no-gutter">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12"></div>
                    <div className="invoice_total_child col-md-4 col-12">
                        <div className="invoice_total_child_heading">
                            <span><strong>Invoice Summery</strong></span>
                        </div>
                        <div className="invoice_total_child_body pl-2 pr-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Sub total</span>
                                <span>BDT {Number(subTotal()).toFixed(2)}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Discount</span>
                                <span>(-)BDT {Number(props.details?.coupon_discount).toFixed(2) || 0}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>(+)BDT {Number(props.details?.shipping_cost).toFixed(2) || 0}</span>
                            </div>
                            <div className="invoice_total_border d-flex align-items-center justify-content-between">
                                <span>Total</span>
                                <span>BDT {Number(props.details?.pay_amount).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signature_section text-center">
                    <span className=''>"This is computer Generated Invoice. Please Signature it"</span>
                </div>
            </footer>
     );
}
 
export default InvoiceFooter;