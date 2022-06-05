import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// const axios = require('axios').default;

function NewMeetupPage() {
  const navigate = useNavigate();
  // const history = useNavigate();

  const addMeetupHandler = (meetupData) => {
    axios
      .post(
        'https://react-router-test-app-default-rtdb.firebaseio.com/meetups.json',
        JSON.stringify(meetupData)
      )
      .then((response) => {
        console.log(response);

        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
