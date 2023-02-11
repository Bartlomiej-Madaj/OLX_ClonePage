import { newAdvertisement, CategoryItem } from "../types/globalType";

export const AddsArray: newAdvertisement[] = [
  {
    id: "1",
    title:
      "Bugatti silik w stanie dobrym, nie bity, niemiec płakał jak sprzedawał",
    category: "Elektronika",
    image: ["/images/adds/bugatti.jpg", "/images/adds/bugatti2.jpg"],
    date: "01-03-2020",
    price: "1000000",
    location: "Warszawa, Wola ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, sunt culpa rerum exercitationem facere error temporibus perspiciatis. Rerum laboriosam dolore sequi ullam molestias iure provident optio eligendi eos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae dolorem aliquam nisi harum ut ducimus modi architecto dicta molestiae. Laudantium inventore enim nostrum nisi ipsum, consectetur quisquam. Ex, alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam inventore, totam architecto officiis at facere, delectus eaque enim tempore voluptas porro impedit maiores expedita. Eum aspernatur neque cumque ipsam cupiditate.",
    isNegotiating: false,
    userName: "Grzesiek",
    email: "grzesiek@test.pl",
    phoneNumber: 123456789,
  },

  {
    id: "2",
    date: "01-03-2020",
    title: "Krzesła i wygode i tanie",
    category: "Meble",
    image: ["/images/adds/chair.jpg", "/images/adds/chair2.jpg"],
    price: "150",
    location: "Warszawa ul.Zagrzyckiego 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, sunt culpa rerum exercitationem facere error temporibus perspiciatis. Rerum laboriosam dolore sequi ullam molestias iure provident optio eligendi eos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae dolorem aliquam nisi harum ut ducimus modi architecto dicta molestiae. Laudantium inventore enim nostrum nisi ipsum, consectetur quisquam. Ex, alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam inventore, totam architecto officiis at facere, delectus eaque enim tempore voluptas porro impedit maiores expedita. Eum aspernatur neque cumque ipsam cupiditate.",
    isNegotiating: false,
    userName: "Grzesiek",
    email: "grzesiek@test.pl",
    phoneNumber: 123456789,
  },
  {
    id: "3",
    date: "01-03-2020",
    title: "Książka stan dobry, czytana tylko raz",
    category: "Elektronika",
    image: ["/images/adds/book.jpg", "/images/adds/book2.jpg"],
    price: "30",
    location: "Warszawa ul.Zagrzyckiego 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, sunt culpa rerum exercitationem facere error temporibus perspiciatis. Rerum laboriosam dolore sequi ullam molestias iure provident optio eligendi eos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae dolorem aliquam nisi harum ut ducimus modi architecto dicta molestiae. Laudantium inventore enim nostrum nisi ipsum, consectetur quisquam. Ex, alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam inventore, totam architecto officiis at facere, delectus eaque enim tempore voluptas porro impedit maiores expedita. Eum aspernatur neque cumque ipsam cupiditate.",
    isNegotiating: true,
    userName: "Grzesiek",
    email: "grzesiek@test.pl",
    phoneNumber: 123456789,
  },
  {
    id: "4",
    date: "01-03-2020",
    title:
      "Lokomotywa stan świetny, troche kapie olej. Sprzedaje bo nie mam siły ładować do niej węgla",
    category: "Pojazdy",
    image: ["/images/adds/train.jpg", "/images/adds/train2.jpg"],
    price: "200000",
    location: "Warszawa ul.Zagrzyckiego",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, sunt culpa rerum exercitationem facere error temporibus perspiciatis. Rerum laboriosam dolore sequi ullam molestias iure provident optio eligendi eos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae dolorem aliquam nisi harum ut ducimus modi architecto dicta molestiae. Laudantium inventore enim nostrum nisi ipsum, consectetur quisquam. Ex, alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam inventore, totam architecto officiis at facere, delectus eaque enim tempore voluptas porro impedit maiores expedita. Eum aspernatur neque cumque ipsam cupiditate.",
    isNegotiating: false,
    userName: "Grzesiek",
    email: "grzesiek@test.pl",
    phoneNumber: 123456789,
  },
  {
    id: "5",
    date: "01-03-2020",
    title: "Felgi z amelinium tego nie pomalujesz, 4 sztuki",
    category: "Pojazdy",
    image: ["/images/adds/wheel-rim.jpg", "/images/adds/wheel-rim2.jpg"],
    price: "8000",
    location: "Warszawa ul.Zagrzyckiego 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos, sunt culpa rerum exercitationem facere error temporibus perspiciatis. Rerum laboriosam dolore sequi ullam molestias iure provident optio eligendi eos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae dolorem aliquam nisi harum ut ducimus modi architecto dicta molestiae. Laudantium inventore enim nostrum nisi ipsum, consectetur quisquam. Ex, alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam inventore, totam architecto officiis at facere, delectus eaque enim tempore voluptas porro impedit maiores expedita. Eum aspernatur neque cumque ipsam cupiditate.",
    isNegotiating: true,
    userName: "Grzesiek",
    email: "grzesiek@test.pl",
    phoneNumber: 123456789,
  },
];

export const categoryArray: CategoryItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Motoryzacja",
    image: "/images/category/car.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Nieruchomości",
    image: "/images/category/keys.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Praca",
    image: "/images/category/suitcase.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Dom i ogród",
    image: "/images/category/armchair.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Elektronika",
    image: "/images/category/smartphone.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Noclegi",
    image: "/images/category/bed.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Zdrowie i Uroda",
    image: "/images/category/nail-polish.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Dla dzieci",
    image: "/images/category/stroller.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Sport i Hobby",
    image: "/images/category/soccer-ball.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Muzyka i Edukacja",
    image: "/images/category/guitar.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Praca za granicą",
    image: "/images/category/paint-roller.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Wypożyczalnia",
    image: "/images/category/calendar.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Oddam za darmo",
    image: "/images/category/category.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Praca dodatkowa",
    image: "/images/category/tractor.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Outlet z Elektroniką",
    image: "/images/category/bedside-lamp.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Karma z przesułką za 1zł",
    image: "/images/category/corgi.png",
  },
];

export const categoryWithPrice: string[] = [
  "Motoryzacja",
  "Nieruchomości",
  "Dom i ogród",
  "Elektronika",
  "Noclegi",
  "Zdrowie i Uroda",
  "Dla dzieci",
  "Sport i Hobby",
  "Muzyka i Edukacja",
  "Wypożyczalnia",
  "Outlet z Elektroniką",
  "Karma z przesułką za 1zł",
];
