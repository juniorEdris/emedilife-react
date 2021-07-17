import React from 'react'
import { connect } from 'react-redux'

const EducationQ = (props) => {
    return (
        <div className="middle_inputs mb-3 mt-3">
                <div className="col-12 table_inputs_heading">Education Qualification: </div>
                <div className="table_inputs">
                <table className="table">
                    <thead className="thead-theme">
                        <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Exam Type</th>
                        <th scope="col">Institution</th>
                        <th scope="col">Board/University</th>
                        <th scope="col">Passing Year</th>
                        <th scope="col">Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>
                        <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                            </div>
                         </div>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="full_name" onChange={props.inputEvent} placeholder='Type here' value={props.partTimeInfo.full_name} required />
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

export default connect(mapStateToProps, mapDispatchToProps)(EducationQ)
