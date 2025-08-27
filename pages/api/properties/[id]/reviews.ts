import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  { id: 1, name: "Modern Beach House" },
  { id: 2, name: "Mountain Cabin Retreat" },
  { id: 3, name: "Urban Apartment" },
];

const reviews: { [key: string]: { id: number; user: string; comment: string; rating: number }[] } = {
  "1": [
    { id: 1, user: "Alice Johnson", comment: "Loved the beach house!", rating: 5 },
    { id: 2, user: "Bob Smith", comment: "Great location but a bit noisy.", rating: 4 },
  ],
  "2": [
    { id: 3, user: "Charlie Brown", comment: "Cozy cabin in the mountains.", rating: 4 },
    { id: 4, user: "Diana Prince", comment: "Perfect retreat for a weekend!", rating: 5 },
  ],
  "3": [
    { id: 5, user: "Ethan Hunt", comment: "Very convenient and clean apartment.", rating: 4 },
    { id: 6, user: "Fiona Glenanne", comment: "Close to everything, loved it.", rating: 5 },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const propertyExists = properties.find((p) => p.id.toString() === id);
  if (!propertyExists) {
    return res.status(404).json({ message: "Property not found" });
  }

  const propertyReviews = reviews[id as string] || [];
  res.status(200).json(propertyReviews);
}
