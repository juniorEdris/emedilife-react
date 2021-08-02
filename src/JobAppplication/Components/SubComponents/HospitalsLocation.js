import React from 'react'
import { connect } from 'react-redux'

const MedicalLocation = (props) => {
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
                                <input type="text" className="form-control border-0" id="medicalTypeOne" required onChange={props.inputEvent.medicalLocationEventOne} value={props.form.medicallocationOne.medicalTypeOne}/>
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="medicalNameOne" required onChange={props.inputEvent.medicalLocationEventOne} value={props.form.medicallocationOne.medicalNameOne}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="medicalAddressOne" required onChange={props.inputEvent.medicalLocationEventOne} value={props.form.medicallocationOne.medicalAddressOne}/>
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
                                    <input type="text" className="form-control border-0" id="medicalTypeTwo" required onChange={props.inputEvent.medicalLocationEventTwo} value={props.form.medicallocationTwo.medicalTypeTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalNameTwo" required onChange={props.inputEvent.medicalLocationEventTwo} value={props.form.medicallocationTwo.medicalNameTwo} />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalAddressTwo" required onChange={props.inputEvent.medicalLocationEventTwo} value={props.form.medicallocationTwo.medicalAddressTwo}/>
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
                                    <input type="text" className="form-control border-0" id="medicalTypeThree" required onChange={props.inputEvent.medicalLocationEventThree} value={props.form.medicallocationThree.medicalTypeThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalNameThree" required onChange={props.inputEvent.medicalLocationEventThree} value={props.form.medicallocationThree.medicalNameThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalAddressThree" required onChange={props.inputEvent.medicalLocationEventThree} value={props.form.medicallocationThree.medicalAddressThree}/>
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
                                    <input type="text" className="form-control border-0" id="medicalTypeFour" required onChange={props.inputEvent.medicalLocationEventFour} value={props.form.medicallocationFour.medicalTypeFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalNameFour" required onChange={props.inputEvent.medicalLocationEventFour} value={props.form.medicallocationFour.medicalNameFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalAddressFour" required onChange={props.inputEvent.medicalLocationEventFour} value={props.form.medicallocationFour.medicalAddressFour}/>
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
                                    <input type="text" className="form-control border-0" id="medicalTypeFive" required onChange={props.inputEvent.medicalLocationEventFive} value={props.form.medicallocationFive.medicalTypeFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalNameFive" required onChange={props.inputEvent.medicalLocationEventFive} value={props.form.medicallocationFive.medicalNameFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="medicalAddressFive" required onChange={props.inputEvent.medicalLocationEventFive} value={props.form.medicallocationFive.medicalAddressFive}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                    </tbody>
                </table>

                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalLocation)
