import dateFormat from 'dateformat';
import InvoiceProducts from './InvoiceProducts';

const InvoiceMiddle = (props) => {
    return (
        <div className="">
            <main className='mb-3'>
                <div className="invoice_timestamps row no-gutters mb-3">
                    <div className="col-4 text-center">
                        <span><strong>Invoice No:</strong> #{props.details?.order_number || 'N/A'}</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><strong>Invoice Date:</strong> {dateFormat(
                  props.details?.order_date,
                  ' mmmm dS, yyyy, h:MM:ss TT'
                )}</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><strong>Due Date:</strong> {dateFormat(
                  props.details?.order_date,
                  ' mmmm dS, yyyy, h:MM:ss TT'
                )}</span>
                    </div>
                </div>
                <InvoiceProducts products={props.details}/>
            </main>
        </div>
     );
}
 
export default InvoiceMiddle;