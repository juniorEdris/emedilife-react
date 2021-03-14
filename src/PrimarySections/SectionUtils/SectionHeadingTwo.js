import React from 'react';
import { connect } from 'react-redux';

const SectionHeadingTwo = (props) => {
  return (
    <div>
      <h2 className="section_heading_two">
        {props.textOne} <span>{props.textTwo}</span>
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeadingTwo);
