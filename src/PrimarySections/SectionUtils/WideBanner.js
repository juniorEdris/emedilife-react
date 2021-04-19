import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';

const WideBanner = (props) => {
  return (
    <div className="wide_banner mb-5">
      {props.loading ? (
        <div className="wide_banner_image">
          <Skeleton width={'100%'} height={270} />
        </div>
      ) : (
        <div className="wide_banner_image">
          {props.online ? (
            <img src={`https:${props.imagepath}`} alt={``} />
          ) : (
            <img src={`./assets/images/${props.imagepath}`} alt={``} />
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WideBanner);
