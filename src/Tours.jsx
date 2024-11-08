import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((t) => (
          <Tour key={t.id} {...t} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
