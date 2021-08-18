import Skeleton from '@yisheng90/react-loading';
import { Link } from 'react-router-dom';
import { Truncate } from '../../PrimarySections/Utility';

const InvoiceProducts = (props) => {

    return (
        <div className="primary_table overflow-none invoice-table">
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
            {props.products?.cart?.map((item) => (
              <tr className="trow-light" key={item.products_id}>
                <td>
                  <Link
                    to={`/productdetails?id=${item.products_id}`}
                    className="order_table_name">
                    {Truncate(item.name, 15)}
                  </Link>
                </td>
                <td>BDT {item.price}</td>
                <td>{item.total_quantity}</td>
                <td>BDT {'00'}</td>
                <td>
                  BDT{' '}
                  {(Number(item.price) * Number(item.total_quantity)).toFixed(
                    2
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
     );
}
 
export default InvoiceProducts;