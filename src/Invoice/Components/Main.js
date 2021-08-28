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
                        <span><strong>Invoice Date:</strong> {
                            dateFormat('mmm dS, yyyy h:MM TT', new Date())
                        }</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><strong>Due Date:</strong> {dateFormat(
                  props.details?.order_date,
                  'mmm dS, yyyy, h:MM TT'
                )}</span>
                    </div>
                </div>
                <InvoiceProducts products={props.details}/>
            </main>
        </div>
     );
}
 
export default InvoiceMiddle;