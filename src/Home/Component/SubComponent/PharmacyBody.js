import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import { renderDiv } from '../../../PrimarySections/Utility';
import './pharmacybody.css';

export const PharmacyBody = (props) => {
  return (
    <div className="pharmacy_body mt-5">
      <div className="container-md-fluid">
        <div className="row">
          <div className="col-12 col-md-6 pharmacy_left mb-4 mb-sm-0">
            {
              props.loading ?
              (
                <ul className="list">
                <li>
                  <Skeleton width={'100%'} height={40} />

                  <ul className="sub_list">
                    <li>
                      <Skeleton width={'100%'} height={40} />

                    </li>
                    <li>
                      <Skeleton width={'100%'} height={40} />

                    </li>
                    <li>
                      <Skeleton width={'100%'} height={40} />

                    </li>
                  </ul>
                </li>
                <li>
                  <Skeleton width={'100%'} height={40} />

                  <ul className="sub_list">
                    <li>
                      <Skeleton width={'100%'} height={40} />

                    </li>
                    <li>
                      <Skeleton width={'100%'} height={40} />

                    </li>
                  </ul>
                </li>
              </ul>
              ):
                  (
            <div className="col m-auto">
              {renderDiv(props.video?.description)}
            </div>
                )
              }
          </div>
          <div className="col-12 col-md-6 pharmacy_right">
            {props.loading ? (
              <div className="col m-auto plyr__video-embed" id="player">
                <Skeleton width={'100%'} height={326} />
              </div>
            ) : (
              props.video?.youtube_url && (
                <div className="col m-auto plyr__video-embed" id="player">
                  <iframe
                    src={`https://www.youtube.com/embed/${props.video?.youtube_url}`}
                    frameBorder={0}
                    title="video"
                    allowfullscreen={true}
                    allowtransparency
                    allow="autoplay"
                    style={{ height: '100%' }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  video: state.HomeContent.homeVideo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyBody);
