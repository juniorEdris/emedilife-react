import { renderDiv } from '../Utility';
import './more_pages.css';

const MorePages = (props) => {
  return (
    <div className="more_pages">
      <h1 className="text-capitalize text-center pt-5">{props.pageData?.title}</h1>
      <div className="container-md-fluid">{renderDiv(props.pageData?.details)}</div>
    </div>
  );
};

export default MorePages;
