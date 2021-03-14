import React from 'react';
import { connect } from 'react-redux';

const ContactForm = (props) => {
  return (
    <div className="contact_form offset-md-3 col-md-6 mb-5">
      <h1>Contact Form</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Subject"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            placeholder="Message"></textarea>
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
