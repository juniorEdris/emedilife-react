import React from 'react';
import { connect } from 'react-redux';

const EditInformation = (props) => {
  return (
    <div className="edit_information">
      <div className="acc_dash_heading">
        <h5>Edit account information</h5>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation);
