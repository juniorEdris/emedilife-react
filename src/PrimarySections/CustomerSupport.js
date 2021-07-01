import { useEffect, useState } from 'react';
import MorePages from './MorePages'
import { toTheTop } from './SectionUtils/WindowTop';
import { API, ENDPOINTS } from './Utility/API_Links';

const CustomerSupport = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      toTheTop();
      API()
      .get(`${ENDPOINTS.MOREPAGES}/${'8'}`)
      .then((res) => {
        setData(res.data);
      });
    }, []);
    return (
        <div className="customer-support-wrapper">
            <MorePages pageData={data }/>
        </div>
     );
}
 
export default CustomerSupport;