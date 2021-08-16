import InvoiceProducts from './InvoiceProducts';

const InvoiceMiddle = () => {
    return (
        <div className="">
            <main className='mb-3'>
                <div className="invoice_timestamps row no-gutters mb-3">
                    <div className="col-4 text-center">
                        <span><strong>Invoice No:</strong> #UPZ54541722417</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><strong>Invoice Date:</strong> 21 - 08 - 2021</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><strong>Due Date:</strong> 21 - 08 - 2021</span>
                    </div>
                </div>
                <InvoiceProducts/>
            </main>
        </div>
     );
}
 
export default InvoiceMiddle;