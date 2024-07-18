import Newsevent from './Newsevent'
import Calendar from './Calendar'
import Topper from './Topper'

function Eventmain() {
    return (
        <div style={{backgroundColor:"#f1e7e7"}}>
        <div className='container'  >
            <div className='eventgrid' >
                <div className='newsevent'>
                    <Newsevent />
                </div>
                <div className='calendar1'>
                    <Calendar/>
                </div>
                <div className='topper'>
                    <Topper/>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Eventmain
