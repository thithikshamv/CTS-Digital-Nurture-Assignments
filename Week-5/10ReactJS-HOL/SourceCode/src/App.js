import './App.css';

function App() {

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {officeList.map((office, index) => (

        <div key={index}>

          <img
            src={office.Image}
            alt={office.Name}
            width="350"
            height="220"
          />

          <h2>Name : {office.Name}</h2>

          <h3
            style={{
              color: office.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent : Rs. {office.Rent}
          </h3>

          <h3>Address : {office.Address}</h3>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default App;
