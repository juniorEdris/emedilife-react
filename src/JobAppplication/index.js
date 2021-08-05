import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import FullTimeForm from './Components/FullTimeForm';
import './jobapplication.css'
import PartTimeForm from './Components/PartTimeForm';
import VoulenteerForm from './Components/VoulenteerForm';
import {toTheTop} from '../PrimarySections/SectionUtils/WindowTop';

const JobAplication = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
    const [activeSection, setActiveSection] = useState('part time job');
    
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
            section:'volunteer',
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
   
                            /> :
                            activeSection === 'full time job' ?
                            <FullTimeForm
 
                            /> :
                            <VoulenteerForm 
 
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
