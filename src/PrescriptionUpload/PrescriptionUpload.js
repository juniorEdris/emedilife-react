import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import PreviewSection from './Components/PreviewSection';
import UploadSection from './Components/UploadSection';
import './uploadSection.css';
const PrescriptionUpload = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
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
