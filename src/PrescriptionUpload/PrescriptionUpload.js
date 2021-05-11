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
    <div className="container-md-fluid prescription_body">
      {props.loading && (
        <div className="prescription_loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="prescription_upload row">
        <UploadSection />
        <PreviewSection />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Prescription.uploadloading,
  success: state.Prescription.prescriptionSuccess,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);
