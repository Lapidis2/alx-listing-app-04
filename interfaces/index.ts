export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

export interface PROPERTYLISTINGSAMPLEProps {
  image: string;
  rating:number;
  name:string;
  price:number;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}
