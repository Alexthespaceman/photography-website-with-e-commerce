function PaymentScreen(props) {
  let { countries, photoNumbers } = props;
  let countryCount = countries
        .filter((item) => {
          console.log(item.photo)
          return photoNumbers.includes(item.photo);
        })
  let count = countryCount.length;
  return (
    <div className="filtered-photos-title">
      {countryCount
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
        <p className="total">Total: £{count *25}</p>
    </div>
  );
}

export default PaymentScreen;
