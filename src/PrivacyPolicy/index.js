import { useEffect } from 'react';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';

const PrivacyPolicy = () => {
  useEffect(() => {
    toTheTop();
  }, [])
  return (
    <div className="more_pages">
      <h1 className="text-capitalize text-center pt-5 pb-5">Privacy Policy</h1>
      <div className="container-md-fluid">
        <p className="privacy-paragraph">
          Emedilife might also additionally collect records about you. These
          records can also additionally consist of your Name, phone number,
          browser model and operating system, access times, and referring
          addresses. We can also additionally use these records for running our
          services, keeping the excellence of the service, protection
          management, and supplying reports for relevant commercial enterprise
          purposes. These records aren't always shared with everyone beyond
          legal website support staff, besides while required via means of a law
          enforcement investigation. Emedilife does now no longer collect
          personally identifiable records about You while You visit Our website
          until in any other case said or until You choose to provide these
          records to Us (which include via registration or on records submission
          forms). This website can also additionally comprise hyperlinks to
          different websites that aren't owned or managed by Us. Please be
          conscious that We aren't answerable for the privacy practices of such
          different websites. and each website that collects personally
          identifiable statistics. We inspire You to be conscious while You
          leave Our website and to read the privacy rules of every and each
          website that collects individually identifiable records.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
