import { NextApiRequest, NextApiResponse } from "next";

let bookings: any[] = []; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking = req.body;
    if (!booking.firstName || !booking.lastName || !booking.email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    bookings.push({ ...booking, id: bookings.length + 1 });

    return res.status(201).json({ message: "Booking confirmed!", booking });
  }

  if (req.method === "GET") {
    return res.status(200).json(bookings); 
  }

  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
