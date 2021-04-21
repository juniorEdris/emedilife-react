import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PrescriptionUpload } from '../../Redux/Action/PrescriptionUploadAction';

const UploadSection = (props) => {
  const [images, setImages] = useState({ image: '' });
  console.log(props);
  const handleChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) {
      return;
    } else {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImages({
          image: e.target.result,
        });
      };
      const ddd = reader.readAsDataURL(files[0]);
      console.log(reader, files, 'FFFF', ddd);
      // setImages({
      //   image: e.target.files,
      // });
    }
  };
  const submitFrom = (e) => {
    console.log('prescription frontend page', images);
    // props.upload('raghib', images.image);
  };
  const removeImage = (image, i) => {
    setImages({ image: '' });
    // setImages((images) =>
    //   [...images].filter((x, index, arr) => arr.indexOf(x) !== i)
    // );
  };
  return (
    <div className="upload_section col col-md-8">
      {/* <div className="upload_section_top">
        <span>home/upload prescription</span>
      </div> */}{' '}
      <div className="upload_section_middle">
        <span className="">upload prescription</span>
        {props.error?.prescription && (
          <div className="mt-2 mb-2 text-center">
            <p className="text-danger">{props.error.prescription}</p>
          </div>
        )}
        <form action="" method="POST" encType="multipart/formdata">
          <div className="file_upload_btn mt-4 mb-3">
            <div className="image_preview row">
              {images.image !== '' ? (
                <div className="per_image col-6 p-1 ">
                  <span
                    className=" remove_picture lnr lnr-cross"
                    onClick={() => removeImage()}></span>
                  <img src={images.image} alt="" />
                </div>
              ) : (
                <img
                  src={`./assets/svg/icons/upload.svg`}
                  className="file-input-img"
                  alt=""
                />
              )}
            </div>
            <div className="">
              <input
                type="file"
                className="file-input"
                name=""
                id="file-upload"
                multiple={true}
                onChange={handleChange}
              />
            </div>
            <span className="text-muted">
              upload photo of your prescription
            </span>
            <label
              for="file-upload"
              className="gallery-btn btn col offset-md-3 col-md-6 btn-block btn-outlined">
              <img
                src={`./assets/svg/icons/gallery.svg`}
                className="gallery-btn-img"
                alt=""
              />
              Gallery
            </label>
          </div>
          <div className="submit_button">
            <button
              type="button"
              className="btn col offset-md-3 col-md-6"
              onClick={submitFrom}>
              Procced
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  success: state.Prescription.prescriptionSuccess,
  error: state.Prescription.error,
});

const mapDispatchToProps = (dispatch) => ({
  upload: (name, image) => dispatch(PrescriptionUpload(name, image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadSection);
