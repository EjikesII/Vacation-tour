import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

const deleteTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours);
};

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
        console.log(error)
    }
    setIsLoading(false)
  };

  useEffect(() => {
    fetchTours();
  }, []
);
  if(isLoading){
    return ( 
    <main>
      <Loading />
    </main>
    )
  };
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No Tour left</h2>
        <button type="button" style={{marginTop:"3rem"}}
        className="btn"
        onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} deleteTour={deleteTour} />
    </main>;
};
export default App;
