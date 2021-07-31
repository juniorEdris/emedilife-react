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
                                <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
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
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
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
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
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
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
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
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="location" onChange={props.inputEvent}  value={props.form.location} required />
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

export default connect(mapStateToProps, mapDispatchToProps)(PharmaciesLocation)
