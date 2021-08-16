import Skeleton from '@yisheng90/react-loading';
import { Link } from 'react-router-dom';
import { Truncate } from '../../PrimarySections/Utility';

const InvoiceProducts = (props) => {
    return (
        <div className="primary_table overflow-none">
      <table class="table">
        <thead class="thead-primary">
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Rate</th>
            <th scope="col">Quantity</th>
            <th scope="col">vat</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {props.loading ? (
          <tbody>
            {Array(4)
              .fill()
              .map((tr) => (
                <tr>
                  <td colSpan={6}>
                    <Skeleton width={'100%'} height={30} />
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <tbody>
            {Array(4)
              .fill()
              .map((item,i) => (
              <tr className="trow-light" key={i}>
                <td>
                  <Link
                    to={`/productdetails?id=${0}`}
                    className="order_table_name">
                    {Truncate('Omron HEM 7120 Fully Automatic ', 15)}
                  </Link>
                </td>
                <td>{'none'}</td>
                <td>{'2'}</td>
                <td>BDT {'200'}</td>
                <td>
                  BDT{' '}
                  {(Number('200') * Number('2')).toFixed(
                    2
                  )}
                </td>
              </tr>
            ))}
            <tr className="order_price_card">
              <td colSpan="4" className="order_price_section">
                Sub Total
              </td>
              <td>BDT {Number('100').toFixed(2)}</td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="4" className="order_price_section">
                Regular (withine 24 hours)
              </td>
              <td>
                (+)BDT {Number('100').toFixed(2) || 0}
              </td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="4" className="order_price_section">
                Discount
              </td>
              <td>
                (-)BDT {Number('00').toFixed(2) || 0}
              </td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="4" className="order_price_section">
                Total
              </td>
              <td>BDT {Number('1200').toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
     );
}
 
export default InvoiceProducts;