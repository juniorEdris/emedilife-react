import React from 'react';
import { connect } from 'react-redux';

export const PharmacyBody = (props) => {
  return (
    <div className="pharmacy_body mt-5">
      <div className="container-md-fluid">
        <div className="row">
          <div className="col-12 col-md-6 pharmacy_left mb-2 mb-sm-0">
            <div className="col m-auto">
              <ul className="list">
                <li>
                  <b className="mb-1">How to order medicines on Medipathy?</b>
                  <ul className="sub_list">
                    <li>
                      {' '}
                      <img
                        src="./assets/images/pharmacy_images/list/1.png"
                        alt=""
                      />{' '}
                      Upload Valid Prescription
                    </li>
                    <li>
                      {' '}
                      <img
                        src="./assets/images/pharmacy_images/list/2.png"
                        alt=""
                      />{' '}
                      Get a Confirmation Call
                    </li>
                    <li>
                      {' '}
                      <img
                        src="./assets/images/pharmacy_images/list/3.png"
                        alt=""
                      />{' '}
                      Delivery at your door step
                    </li>
                  </ul>
                </li>
                <li>
                  <b>You Don't have Prescription? No Worry!</b>
                  <ul className="sub_list">
                    <li>
                      {' '}
                      <img
                        src="./assets/images/pharmacy_images/list/1.png"
                        alt=""
                      />{' '}
                      Search &amp; add the medicines
                    </li>
                    <li>
                      {' '}
                      <img
                        src="./assets/images/pharmacy_images/list/2.png"
                        alt=""
                      />{' '}
                      Get a Confirmation Call
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 pharmacy_right">
            <div className="col m-auto">
              <iframe
                // width={100}
                height={300}
                src="https://www.youtube.com/embed/QHBnlkBTOkM"
                frameBorder={0}
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* <video id="my-video" className="video-js" controls preload="auto"  height={300}  data-setup="{}">
  <source src="MY_VIDEO.mp4" type="video/mp4" />
  <source src="MY_VIDEO.webm" type="video/webm" />
</video> */}
            </div>
            {/*width={640}poster="MY_VIDEO_POSTER.jpg"*/}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyBody);
