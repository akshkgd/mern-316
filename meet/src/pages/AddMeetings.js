import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
function AddMeetings() {
    const navigate = useNavigate();
    const meetingTitleInput = useRef(null);
    const meetingImgInput = useRef();
    const meetingTime = useRef();
    const meetingDesc = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const title = meetingTitleInput.current.value;
        const img = meetingImgInput.current.value;
        const time = meetingTime.current.value;
        const desc = meetingDesc.current.value;
        
        const meetingData = {
            title: title,
            img: img,
            time: time,
            desc:desc
        }
        fetch('https://mern-316-meet-default-rtdb.firebaseio.com/meetings.json', {
            method: 'post',
            body: JSON.stringify(meetingData)
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div className='add-container'>
            <h2>Add New Meeting</h2>

            <form onSubmit={submitHandler}>
                <input className='input' placeholder='Enter the Meeting Title' ref={meetingTitleInput}></input>
                <input className='input' placeholder='Enter the image keyword' ref={meetingImgInput}></input>
                <input className='input' type="datetime-local" placeholder='Enter the Meeting Time' ref={meetingTime}></input>
                <textarea rows='3' placeholder='Enter the details' className='input' ref={meetingDesc}></textarea>
                <button type='submit' className='btn'>Create new Meeting</button>
            </form>

        </div>
    )
}
export default AddMeetings;