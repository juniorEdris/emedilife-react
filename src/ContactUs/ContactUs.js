import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import ContactDetails from './Components/ContactDetails';
import ContactForm from './Components/ContactForm';
import Map from './Components/Map';
import './contact_us.css';

const ContactUs = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="contact_wrapper container-md">
      <Map />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
