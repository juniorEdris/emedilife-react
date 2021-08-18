const InvoiceHeader = (props) => {
    return (
        <div className="mb-2">
            <header>
                <div className="customer_copy text-right">
                    <span className='text-capitalize'>customer copy</span>
                </div>
                <div className="invoice_logo text-center">
                    <img src="./assets/svg/icons/invoice/invoice_logo.svg" alt="invoice logo" />
                </div>
                <div className="invoice_head_text text-center mb-3">
                    <span className='text-uppercase'>invoice</span>
                </div>
                <div className="invoice_address_wrapper row">
                    <div className="col-12 col-md-6 p-2 mb-2 mb-md-0 ">
                        <div className="invoice_address_child p-2 pl-3">
                            <h5 className='mb-1'>From</h5>
                            <div className="invoice_address_top mb-4">
                                <div className="invoice_name">
                                    <span>{props.details?.customer_name || 'N/A'}</span>
                                </div>
                                <div className="invoice_address">
                                    <span>{props.details?.customer_address || 'N/A'}</span>
                                </div>
                            </div>
                            <div className="invoice_address_bottom">
                            <div className="invoice_email">
                                    <span>{props.details?.customer_email || 'N/A'}</span>
                                </div>
                                <div className="invoice_number">
                                    <span>{props.details?.customer_phone || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2 mb-2 mb-md-0 ">
                        <div className="invoice_address_child p-2 pl-3">
                            <h5 className='mb-1'>To</h5>
                            <div className="invoice_address_top mb-4">
                                <div className="invoice_name">
                                    <span>{props.details?.customer_name || 'N/A'}</span>
                                </div>
                                <div className="invoice_address">
                                    <span>{props.details?.customer_address || 'N/A'}</span>
                                </div>
                            </div>
                            <div className="invoice_address_bottom">
                            <div className="invoice_email">
                                    <span>{props.details?.customer_email || 'N/A'}</span>
                                </div>
                                <div className="invoice_number">
                                    <span>{props.details?.customer_phone || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
     );
}
 
export default InvoiceHeader;