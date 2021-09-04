function AllPhotographsScreen(props) {
  const wrapperFunction = (place) => {
    props.addNumber();
    props.addPhotoNumber(place);
  };

  return (
    <div className="filtered-photos-title">
      {props.countries.map((place) => {
        return (
          <div className="filtered-photo-box">
            <img alt="pics" className="photo-frame" src={place.image}></img>
            <p className="filtered-desription">
              {place.description} <br /> {place.price}
              <button
                onClick={() => wrapperFunction(place)}
                className="basket-hover-button"
              >
                Add to basket{" "}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default AllPhotographsScreen;
