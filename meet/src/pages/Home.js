import { useState, useEffect } from 'react';
import './style.css';
import MeetingCard from '../components/MeetingCards';



function Home(){
    const [loading, setLoading] = useState(true);
    const [meetings, setMeetings] =useState([])
    useEffect(()=>{
        fetch('https://mern-316-meet-default-rtdb.firebaseio.com/meetings.json').then(
        response =>response.json()).then(data =>{
            const meeting = [];
            for(const key in data){
                const meeting = {
                    id: key,
                    ...data[key]
                }
                // console.log(meeting)
                meetings.push(meeting)
                console.log(meetings)
            }
            setMeetings(meetings);
            setLoading(false);
        });
    }, [])
    

    return(
        <div className=''>
            <h2 className='text-center'>All Meetings</h2>
           

           <div className={loading ? 'loading' : 'd-none'}>
            Loading
           </div>

        <div className='meeting-container'>
            {
                meetings.map((meeting)=>{
                    return <MeetingCard title={meeting.title} img={meeting.img} desc={meeting.desc} />
                })

        
            }
        </div>
        </div>
    )
}
export default Home;