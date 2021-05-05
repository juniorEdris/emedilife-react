import React, { useEffect, useState } from 'react';
import { API, ENDPOINTS } from '../../../PrimarySections/Utility/API_Links';
import { connect } from 'react-redux';
import { setUserAction } from '../../../Redux/Action/UserAction';
import { UserID } from '../../../PrimarySections/Utility';
import { useHistory } from 'react-router';

const UserEntry = (props) => {
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [OTP, setOTP] = useState('');
  // const [userId, setUser] = useState(false);
  const [error, setError] = useState({});
  // useEffect(() => {
  //   if (UserID()) {
  //     setUser(false);
  //     setTimeout(() => {
  //       setError({});
  //       localStorage.removeItem('user_id');
  //     }, 120000);
  //   }
  //   return () => {
  //     clearTimeout(() => {
  //       localStorage.removeItem('user_id');
  //     }, 120000);
  //   };
  // }, [userId]);
  const register = async (e) => {
    e.preventDefault();
    setError({});
    await API()
      .post(`${ENDPOINTS.REGISTER}?phone=${number}`)
      .then((res) => {
        if (res.data.data.id) {
          localStorage.setItem('user_id', res.data.data.id);
          setError({ otp: res.data.data.otp });
          // setUser(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setError({ numFormat: error.data });
      });
  };
  const login = async (e) => {
    e.preventDefault();
    setError({});
    await API()
      .post(`${ENDPOINTS.LOGIN}?phone=${number}&otp=${OTP}`)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('user_token', res.data.token);
          props.setUser();
          history.push(`${props.pathRedirect}`);
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
                      <form action="#" onSubmit={!UserID() ? register : login}>
                        <div className="form-group row align-items-center mt-5">
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
                          </div>
                        </div>
                        {UserID() && (
                          <div className="form-group row align-items-center mb-5">
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
                              {error.otp && (
                                <div className="text-success">{error.otp}</div>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="login-box mt-4 text-center">
                          <button
                            type="submit"
                            className="btn mb-4 col-12 col-sm-12 col-md-7">
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
          </div>
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEntry);
