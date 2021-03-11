import React, { useState } from 'react';
import { API } from '../../../PrimarySections/Utility/API_Links';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const UserEntry = (props) => {
  const [number, setNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [OTPActive, setOTPActive] = useState(false);
  const [error, setError] = useState({});
  const history = useHistory();
  const register = async (e) => {
    e.preventDefault();
    setError({});
    await API()
      .post(
        `https://medipathy.changetechbd.com/api/app/register?phone=${number}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.data.id) {
          setOTPActive(true);
          localStorage.setItem('user_id', res.data.data.id);
          setError({ otp: res.data.data.otp });
        } else if (!res.data.status) {
          setError({
            message: res.data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        setError({ numFormat: error.response.data.phone });
      });
  };
  const login = async (e) => {
    e.preventDefault();
    setError({});
    await API()
      .post(
        `https://medipathy.changetechbd.com/api/app/login?phone=${number}&otp=${OTP}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem('user_token', res.data.token);
          history.push('/dashboard');
        } else if (!res.data.status) {
          setError({
            otpErrMessage: res.data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="user_entry pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <main id="primary" className="site-main">
              <div className="user-login">
                <div className="row"></div> {/* end of row */}
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
                    <div className="login-form">
                      <div className="user_entry_heading">Login/Register</div>
                      <form action="#" onSubmit={!OTPActive ? register : login}>
                        <div className="form-group row align-items-center mb-2">
                          <div className="col-12 col-sm-12 col-md-8 offset-lg-2 offset-xl-2">
                            <input
                              type="text"
                              className="form-control input"
                              id="number"
                              placeholder="Enter your phone number"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              required
                            />
                            <div className="error-handler">{error.message}</div>
                            <div className="error-handler">
                              {error.numFormat}
                            </div>
                          </div>
                        </div>
                        {OTPActive && (
                          <div className="form-group row align-items-center mb-2">
                            <div className="col-12 col-sm-12 col-md-8 offset-lg-2 offset-xl-2">
                              <input
                                type="text"
                                className="form-control input"
                                id="otp"
                                placeholder="Enter your OTP"
                                value={OTP}
                                onChange={(e) => setOTP(e.target.value)}
                                required
                              />
                              <div className="error-handler">
                                {error.otpErrMessage}
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="login-box mt-3 text-center">
                          <button
                            type="submit"
                            className="btn mb-4 mt-2 col-12 col-sm-12 col-md-7">
                            Continue
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{' '}
              {/* end of user-login */}
            </main>{' '}
            {/* end of #primary */}
          </div>
          <div className="user_msg_text col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
            By Clicking continue, you agree with our Privacy Policy
            {error.otp && (
              <div className="error-handler">Your OTP : {error.otp}</div>
            )}
          </div>
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserEntry);
