import { connect } from 'react-redux';
import Sidebar from './SubComponents/Sidebar';

export const Index = (props) => {
  return (
    <div className="blog_details container-md-fluid col-12">
      <Sidebar />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
