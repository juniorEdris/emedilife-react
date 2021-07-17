import { useState } from 'react';
import { connect } from 'react-redux'
import FullTimeForm from './Components/FullTimeForm';
import './jobapplication.css'
import PartTimeForm from './Components/PartTimeForm';
import VoulenteerForm from './Components/VoulenteerForm';

const JobAplication = (props) => {
    const [activeSection, setActiveSection] = useState('part time job');
    const [partTimeInfo, setPartTimeInfo] = useState(
        {
            full_name: '',
            birth_date: '',
            father_name: '',
            mother_name: '',
            sex: '',
            religion: '',
            mobile:'',
            email:'',
            nid_no:'',
            present_address:'',
            permanent_address:'',
        }
    );
    const partTimeDetailsSet = e => {
        setPartTimeInfo({
            ...partTimeInfo,
            [e.target.id]: e.target.value,
        })
    }
    console.log(partTimeInfo);
    const section_setters = [
        {
            id: 1,
            section:'part time job',
        },
        {
            id: 2,
            section:'full time job',
        },
        {
            id: 3,
            section:'voulenteer',
        },
    ]
    return (
        <div className='jobaplication_wrapper '>
            <div className="container-md-fluid">

            <div className="application_header d-flex flex-wrap align-items-center">
                {
                    section_setters.map(section => (
                        <div className={`col-12 col-md-3 section_setter ${section.section === activeSection && 'active'}`} key={section.id} onClick={ ()=> setActiveSection(section.section)}>{ section.section }</div>
                        ))
                }
                
            </div>
            <main className='container-md-fluid'>
                    {
                        activeSection === 'part time job' ?
                            <PartTimeForm
                                partTimeInfo = {partTimeInfo}
                                setPartTimeInfo={setPartTimeInfo}
                                inputEvent={partTimeDetailsSet}    
                            /> :
                            activeSection === 'full time job' ?
                            <FullTimeForm
                                partTimeInfo = {partTimeInfo}
                                setPartTimeInfo={setPartTimeInfo}
                                inputEvent={partTimeDetailsSet}  
                            /> :
                            <VoulenteerForm 
                                partTimeInfo = {partTimeInfo}
                                setPartTimeInfo={setPartTimeInfo}
                                inputEvent={partTimeDetailsSet}  
                            />
                    }
            </main>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(JobAplication)
