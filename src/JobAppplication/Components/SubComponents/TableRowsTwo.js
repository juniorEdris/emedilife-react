import React from 'react'
import { connect } from 'react-redux'

const TableRowsTwo = (props) => {
    return (
        <div className=" job_application middle_inputs mb-3 mt-3">
                <div className="col-12 table_inputs_heading text-color-theme">{props.title}: </div>
                <div className="table_inputs">
                <table className="table">
                    <thead className="thead-theme">
                        <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Relation</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">01</th>
                        <td>
                        <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="referalNameOne" onChange={props.inputEvent.ReferalEventOne} value={props.form.referalOne.referalNameOne}  required />
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="referalRelationOne" onChange={props.inputEvent.ReferalEventOne} value={props.form.referalOne.referalRelationOne}  required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="referalAddressOne" onChange={props.inputEvent.ReferalEventOne} value={props.form.referalOne.referalAddressOne}  required />
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="referalPhoneOne" onChange={props.inputEvent.ReferalEventOne} value={props.form.referalOne.referalPhoneOne} />
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
                                    <input type="text" className="form-control border-0" id="referalNameTwo" onChange={props.inputEvent.ReferalEventTwo} value={props.form.referalTwo.referalNameTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="referalRelationTwo" onChange={props.inputEvent.ReferalEventTwo} value={props.form.referalTwo.referalRelationTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="referalAddressTwo" onChange={props.inputEvent.ReferalEventTwo} value={props.form.referalTwo.referalAddressTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="referalPhoneTwo" onChange={props.inputEvent.ReferalEventTwo} value={props.form.referalTwo.referalPhoneTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        
                        </tr>
                    </tbody>
                </table>
                {props?.error?.referal_error && 
                    <small className="text-danger">
                        {props?.error?.referal_error}
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

export default connect(mapStateToProps, mapDispatchToProps)(TableRowsTwo)
