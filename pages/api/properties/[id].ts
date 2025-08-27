import { NextApiRequest,NextApiResponse } from "next";
const properties = [
  {
	id: "1",
	name: "Modern Beach House",
	image: "/assets/images/image 17.png",
	price: 250,
	rating: 4.8
  },
  {
	id: "2",
	name: "Mountain Cabin Retreat",
	image: "/assets/images/image 15.png",
	price: 180,
	rating: 4.6
  },
  {
	id: "3",
	name: "Urban Apartment",
	image: "/assets/images/image 16.png",
	price: 150,
	rating: 4.5
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((prop) => prop.id === id);
  if (property) {
	res.status(200).json(property);
  } else {
	res.status(404).json({ message: "Property not found" });
  }
}