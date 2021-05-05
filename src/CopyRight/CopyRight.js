import { connect } from 'react-redux';
import './copyright.css';

export const CopyRight = (props) => {
  return (
    <div className="copyright">
      <p>Copyright &#169; 2021 EmediLife Limited - All Rights Reserved</p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CopyRight);
