import { useEffect, useState } from 'react';
import { toTheTop } from '../SectionUtils/WindowTop';
import { renderDiv, useQuery } from '../Utility';
import { API, ENDPOINTS } from '../Utility/API_Links';
import './more_pages.css';

const MorePages = (props) => {
  const [pageData, setPageData] = useState({});
  const query = useQuery();
  const page_id = query.get('page_id');
  useEffect(() => {
    toTheTop();
    API()
      .get(`${ENDPOINTS.MOREPAGES}/${page_id}`)
      .then((res) => {
        setPageData(res.data);
      });
  }, [page_id]);
  return (
    <div className="more_pages">
      <h1 className="text-capitalize text-center pt-5">{pageData?.title}</h1>
      <div className="container-md-fluid">{renderDiv(pageData?.details)}</div>
    </div>
  );
};

export default MorePages;
