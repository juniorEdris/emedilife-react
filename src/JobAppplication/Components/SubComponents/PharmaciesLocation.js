import React from 'react'
import { connect } from 'react-redux'

const PharmaciesLocation = (props) => {
    return (
        <div className="job_application middle_inputs mb-3 mt-3">
                <div className="col-12 table_inputs_heading text-color-theme">{props.title}: </div>
                <div className="table_inputs">
                <table className="table">
                    <thead className="thead-theme">
                        <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">01</th>
                        <td>
                        <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="pharmaTypeOne" required onChange={props.inputEvent.pharmaLocationEventOne} value={props.form.PharmalocationOne.pharmaTypeOne}/>
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="pharmaNameOne" required onChange={props.inputEvent.pharmaLocationEventOne} value={props.form.PharmalocationOne.pharmaNameOne}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="pharmaAddressOne" required onChange={props.inputEvent.pharmaLocationEventOne} value={props.form.PharmalocationOne.pharmaAddressOne}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">02</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaTypeTwo" required onChange={props.inputEvent.pharmaLocationEventTwo} value={props.form.PharmalocationTwo.pharmaTypeTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaNameTwo" required onChange={props.inputEvent.pharmaLocationEventTwo} value={props.form.PharmalocationTwo.pharmaNameTwo} />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaAddressTwo" required onChange={props.inputEvent.pharmaLocationEventTwo} value={props.form.PharmalocationTwo.pharmaAddressTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">03</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaTypeThree" required onChange={props.inputEvent.pharmaLocationEventThree} value={props.form.PharmalocationThree.pharmaTypeThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaNameThree" required onChange={props.inputEvent.pharmaLocationEventThree} value={props.form.PharmalocationThree.pharmaNameThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaAddressThree" required onChange={props.inputEvent.pharmaLocationEventThree} value={props.form.PharmalocationThree.pharmaAddressThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">04</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaTypeFour" required onChange={props.inputEvent.pharmaLocationEventFour} value={props.form.PharmalocationFour.pharmaTypeFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaNameFour" required onChange={props.inputEvent.pharmaLocationEventFour} value={props.form.PharmalocationFour.pharmaNameFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaAddressFour" required onChange={props.inputEvent.pharmaLocationEventFour} value={props.form.PharmalocationFour.pharmaAddressFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">05</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaTypeFive" required onChange={props.inputEvent.pharmaLocationEventFive} value={props.form.PharmalocationFive.pharmaTypeFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaNameFive" required onChange={props.inputEvent.pharmaLocationEventFive} value={props.form.PharmalocationFive.pharmaNameFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="pharmaAddressFive" required onChange={props.inputEvent.pharmaLocationEventFive} value={props.form.PharmalocationFive.pharmaAddressFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                    </tbody>
                </table>
                {props?.error?.pharma_error && 
                    <small className="text-danger">
                        {props?.error?.pharma_error}
                    </small>
                    }
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PharmaciesLocation)
