function UserPage() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Flight Booking</h3>

            <table border="1" align="center">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹5500</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹4500</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <button>Book Ticket</button>

        </div>

    );

}

export default UserPage;