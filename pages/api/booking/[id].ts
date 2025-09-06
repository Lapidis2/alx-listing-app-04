// pages/api/bookings.ts
import { NextApiRequest, NextApiResponse } from "next";
import { mockBookings } from "@/lib/mockData";
  
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    // Type guard: ensure id is a string
    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid or missing booking ID" });
    }

    const booking= mockBookings.find((b) => b.id === id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.status(200).json({
      success: true,
      booking,
      message: "Booking fetched successfully",
    });
  } catch (error) {
    console.error("Booking API Error:", error);
    return res.status(500).json({ error: "Failed to get booking" });
  }
}
