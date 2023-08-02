import Tour from "./Tour"

const Tours = ({tours, deleteTour}) => {
    return (
        <section> 
            <div className="=title">
                <h2>Our Vacation</h2>
                <div className="title_underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour)=> {
                    return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
                })}
            </div>
        </section>
    )

};

export default Tours;