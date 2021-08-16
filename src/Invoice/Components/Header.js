const InvoiceHeader = () => {
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
                                    <span>emedilife co.</span>
                                </div>
                                <div className="invoice_address">
                                    <span>House#30(3rd floor), Road#4, Block#B, Agrabad, Chitagong</span>
                                </div>
                            </div>
                            <div className="invoice_address_bottom">
                            <div className="invoice_email">
                                    <span>emedilife.deliver@pharma.com</span>
                                </div>
                                <div className="invoice_number">
                                    <span>+88 01798787442, +88 01554547300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2 mb-2 mb-md-0 ">
                        <div className="invoice_address_child p-2 pl-3">
                            <h5 className='mb-1'>To</h5>
                            <div className="invoice_address_top mb-4">
                                <div className="invoice_name">
                                    <span>emedilife co.</span>
                                </div>
                                <div className="invoice_address">
                                    <span>House#30(3rd floor), Road#4, Block#B, Agrabad, Chitagong</span>
                                </div>
                            </div>
                            <div className="invoice_address_bottom">
                            <div className="invoice_email">
                                    <span>emedilife.deliver@pharma.com</span>
                                </div>
                                <div className="invoice_number">
                                    <span>+88 01798787442, +88 01554547300</span>
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