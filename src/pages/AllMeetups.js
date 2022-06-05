import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true); //initial value/object
  const [dataMeetups, setDataMeetups] = useState([]); //initial value/object empty array/object
  const runOnce = useRef(false);

  useEffect(() => {
    setIsLoading(true);

    if (runOnce.current === false) {
      runOnce.current = true;

      axios
        .get(
          'https://react-router-test-app-default-rtdb.firebaseio.com/meetups.json?auth=W8ll6RkGftQAhXG1giDb0aEH5dPe4TzglQWCzxCp'
        )
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup);
          }
          setDataMeetups(meetups);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={dataMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
