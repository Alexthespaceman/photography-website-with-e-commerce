function PaymentScreen(props) {
  let { countries, photoNumbers } = props;
  return (
    <div className="filtered-photos-title">
      {countries
        .filter((item) => {
          return photoNumbers.includes(item.photo);
        })
        .map((country) => {
          return (
            <div className="filtered-photo-box">
              <img alt="pic" className="photo-frame" src={country.image}></img>
              <p className="filtered-desription">
                {country.description} <br />
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default PaymentScreen;
