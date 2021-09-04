function PaymentScreen(props) {
  return (
    <div className="filtered-photos-title">
      {props.countries
        .filter((place) => {
          return place.photo === props.photoNumbers;
        })
        .map((place) => {
          return (
            <div className="filtered-photo-box">
              <img alt="pic" className="photo-frame" src={place.image}></img>
              <p className="filtered-desription">
                {place.description} <br />
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default PaymentScreen;
