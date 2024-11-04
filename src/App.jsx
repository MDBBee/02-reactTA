import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const updatedTours = tours.filter((t) => t.id !== id);
    setTours(updatedTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(
          "Couldn't fetch the requested data! Please check your url"
        );

      const fetchedTours = await res.json();
      setTours(fetchedTours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
