import React from 'react'
import { connect } from 'react-redux'

const EducationQ = (props) => {
    return (
        <div className="job_application middle_inputs mb-3 mt-3">
                <div className="col-12 table_inputs_heading text-color-theme">{props.title}: </div>
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
                        <th scope="row">01</th>
                        <td className="">
                        <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="type"   required onChange={props.inputEvent.educationEventOne} value={props.form.educationOne.type}/>
                            </div>
                         </div>
                        </div>       
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="institute"   required onChange={props.inputEvent.educationEventOne} value={props.form.educationOne.institute}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="board"   required onChange={props.inputEvent.educationEventOne} value={props.form.educationOne.board}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="year"   required onChange={props.inputEvent.educationEventOne} value={props.form.educationOne.year}/>
                            </div>
                         </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group m-0">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control border-0" id="result"   required onChange={props.inputEvent.educationEventOne} value={props.form.educationOne.result}/>
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
                                    <input type="text" className="form-control border-0" id="typeTwo"   required onChange={props.inputEvent.educationEventTwo} value={props.form.educationTwo.typeTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="instituteTwo"   required onChange={props.inputEvent.educationEventTwo} value={props.form.educationTwo.instituteTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="boardTwo"   required onChange={props.inputEvent.educationEventTwo} value={props.form.educationTwo.boardTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="yearTwo"   required onChange={props.inputEvent.educationEventTwo} value={props.form.educationTwo.yearTwo}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="resultTwo"   required onChange={props.inputEvent.educationEventTwo} value={props.form.educationTwo.resultTwo}/>
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
                                    <input type="text" className="form-control border-0" id="typeThree"   required  onChange={props.inputEvent.educationEventThree} value={props.form.educationThree.typeThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="instituteThree"   required  onChange={props.inputEvent.educationEventThree} value={props.form.educationThree.instituteThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="boardThree"   required  onChange={props.inputEvent.educationEventThree} value={props.form.educationThree.boardThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="yearThree"   required  onChange={props.inputEvent.educationEventThree} value={props.form.educationThree.yearThree}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="resultThree"   required  onChange={props.inputEvent.educationEventThree} value={props.form.educationThree.resultThree}/>
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
                                    <input type="text" className="form-control border-0" id="typeFour"   required  onChange={props.inputEvent.educationEventFour} value={props.form.educationFour.typeFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="instituteFour"   required  onChange={props.inputEvent.educationEventFour} value={props.form.educationFour.instituteFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="boardFour"   required  onChange={props.inputEvent.educationEventFour} value={props.form.educationFour.boardFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="yearFour"   required  onChange={props.inputEvent.educationEventFour} value={props.form.educationFour.yearFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        <td>
                            <div className="form-group m-0">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control border-0" id="resultFour"   required  onChange={props.inputEvent.educationEventFour} value={props.form.educationFour.resultFour}/>
                                </div>
                            </div>
                            </div>        
                        </td>
                        </tr>
                        
                    </tbody>
                </table>
                {props?.error?.education_error && 
                    <small className="text-danger">
                        {props?.error?.education_error}
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

export default connect(mapStateToProps, mapDispatchToProps)(EducationQ)
