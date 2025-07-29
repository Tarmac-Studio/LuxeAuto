import { assets } from "../assets/asset";

interface Feature {

  icon: string;
  title: string;
  subtitle: string;
}

export const features: Feature [] = [
    {
      icon: assets.Better,
      title: "7-day money-back promise.",
      subtitle: "Better than a test drive.",
    },
    {
      icon: assets.Relax,
      title: "3 month warranty.",
      subtitle: "Relax, your car is covered.",
    },
    {
      icon: assets.Luxe,
      title: "Luxe Auto Checklist certified.",
      subtitle: "Examined by experts.",
    },
]

interface Car {
  title: string;
  image: string;
  price: string;
  subtitle: string;
}

export const cars: Car[] = [
  {
    title: "FORD MUSTANG GTR",
    image: assets.FORD, // Replace with actual paths
    subtitle: "STARTING PRICE",
    price: "$5,799.99",
  },
  {
    title: "FORD MUSTANG GTR",
    image: assets.GTR,
    subtitle: "STARTING PRICE",
    price: "$5,799.99",
  },
  {
    title: "FORD MUSTANG GTR",
    image: assets.MUSTANG,    subtitle: "STARTING PRICE",
    price: "$5,799.99",
  },
];