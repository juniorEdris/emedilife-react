import React from 'react';
import { connect } from 'react-redux';
import PreviewSection from './Components/PreviewSection';
import UploadSection from './Components/UploadSection';
import './uploadSection.css';
const PrescriptionUpload = (props) => {
  return (
    <div className="container">
      <div className="prescription_upload row">
        <UploadSection />
        <PreviewSection />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);
