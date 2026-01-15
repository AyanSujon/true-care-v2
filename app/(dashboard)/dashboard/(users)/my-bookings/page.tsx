// import React from 'react';

// const MyBookings = () => {
//     return (
//         <div>
//             MyBookings 
//         </div>
//     );
// };

// export default MyBookings;








import React from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const MyBookings = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
        <p>Please log in to view your bookings.</p>
      </div>
    );
  }

  const bookingCollection = await dbConnect(collections.BOOKINGS);

  let bookings = [];

  const userCollection = await dbConnect(collections.USERS);
  const loggedInUser = await userCollection.findOne({
    email: session.user.email,
  });

  if (loggedInUser?._id) {
    bookings = await bookingCollection
      .find({ userId: loggedInUser._id })
      .sort({ createdAt: -1 })
      .toArray();
  } else {
    bookings = await bookingCollection
      .find({ userEmail: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking: any) => (
            <div key={booking._id.toString()} className="border rounded-lg p-6 shadow-md">
              <p><strong>Service ID:</strong> {booking.serviceId.toString()}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Duration:</strong> {booking.duration} minutes</p>
              <p><strong>Address:</strong> {booking.fullAddress}, {booking.district}, {booking.region}</p>
              <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
              <p><strong>Status:</strong> <span className="capitalize">{booking.status}</span></p>
              <p><strong>Created:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
              {booking.notes && <p><strong>Notes:</strong> {booking.notes}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
