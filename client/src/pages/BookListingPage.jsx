import React, { useState, useEffect } from 'react';
import '../styles/ListingPage.css'; // Import your CSS file for styling

const ListingPage = () => {
  // State to manage existing bookings
  const [bookings, setBookings] = useState([]);

  const getBookingListing = async () => {
    try {
      const response = await fetch(
          `http://localhost:3001/bookings/bookings`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setBookings(data)
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(() => {
    getBookingListing();
  }, []);

console.log("bookings",bookings)

return (
    <div className="container">
  <main>
    {/* <div> <h2 className="heading-static" style={{paddingBottom:10}}>Booking Details</h2></div> */}
 
  <div>
    <table className="booking-table" >
      <thead>
        <tr>
          <th className="table-heading">Booking Id</th>
          <th className="table-heading">Start Date</th>
          <th className="table-heading">End Date</th>
          <th className="table-heading">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => (
          <tr key={index} className="table-row">
            <td>{booking.customerId}</td>
            <td>{booking.startDate}</td>
            <td>{booking.endDate}</td>
            <td>{booking.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </main>
</div>

  );
  
};

export default ListingPage;
