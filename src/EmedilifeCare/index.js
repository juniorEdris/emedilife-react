import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop'
import './care.css'

const EmedilifeCare = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
    return (
        <div className="container-md-fluid">
            <div className='emedilife_care_wrapper'>
                <header>
                    <div className="emedilife_care_headlines">
                        <p>
                        Emedilife care is an unique idea for the peoples of Bangladesh where peoples pay minimum but get maximum formula followed. Emedilife is the only body who patronizes peoples
                        participation in health sector especially unemployed personnel to deliver genuine medicines at maximum discount without any delivery charges and serve exclusive medical
                        services at different reputable hospitals and clinics at low cost. If you register at Emedilife Care campaign, weʼll help you to get more exclusive services to color your life.
                        </p>
                    </div>
                    <div className="emedilife_care_register">
                        <span>Register at Emedilife Care___________</span>
                    </div>
                </header>
                <main className=''>
                    <div className="d-flex flex-wrap">
                <div className="col-12 col-lg-4  ">
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="full_name">Full name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="full_name" placeholder='Full Name' required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="birth_date">Date of birth</label>
                        <input type="date" className="form-control uparzon-input-lg" id="birth_date" required />

                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name">Father's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name" placeholder='Fathers Name' required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name" placeholder='Mothers Name' required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="age">Age</label>
                        <input type="text" className="form-control uparzon-input-lg" id="age" placeholder='Age in number' required/>
                    </div>
                </div>
                
            </form>
            </div>
            <div className="col-12 col-lg-4 ">
            <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mobile_number">Mobile No.</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mobile_number" placeholder='Mobile' required/>
                    </div>
            </div>
            <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="email">Email</label>
                        <input type="text" className="form-control uparzon-input-lg" id="email" placeholder='email' required/>
                    </div>
            </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="nid">NID no.</label>
                        <input type="text" className="form-control uparzon-input-lg" id="nid" placeholder='NID no.' required/>
                    </div>
                </div>
                </div>
            <div className="col-12 col-lg-4 ">
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="sex">Sex:</label>
                    <select className="custom-select uparzon-input-lg" id="sex" >
                        <option selected disabled value>Choose gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="religion">Religion:</label>
                    <select className="custom-select uparzon-input-lg" id="religion" required >
                        <option selected disabled value>Choose religion</option>
                        <option value='islam'>Islam</option>
                        <option value='hindu'>Hindu</option>
                        <option value='other'>Other</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="religion">Religion:</label>
                    <select className="custom-select uparzon-input-lg" id="religion" required >
                        <option selected disabled value>Marital Status</option>
                        <option value='married'>Married</option>
                        <option value='not_married'>Not married</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                    <SubmitButton/>
                </main>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmedilifeCare)
