import walletScreen from "@/public/screens/wallet.png";
import exerciserScreen from "@/public/screens/exerciser.png";
import ecommerceScreen from "@/public/screens/ecommerce.png";
import filmsScreen from "@/public/screens/films.png";
import cocktailsScreen from "@/public/screens/cocktails.png";
import blogScreen from "@/public/screens/blog.png";
import pizzaScreen from "@/public/screens/pizza.png";
export default [
  {
    href: "https://wallet-bodya.vercel.app",
    name: "Wallet",
    technologies: ["React", "NextJS", "Tailwind", "Firebase", "Redux"],
    description:
      "This is money expenses tracker app, you can authorize and will be able to add your expenses and after view all of them, also there is some analytics about categories on which you spend money.",
    image: walletScreen,
  },
  {
    href: "https://pizza-uzhorod.vercel.app",
    name: "Pizza Delivery",
    technologies: [
      "React",
      "NextJS",
      "Sanity",
      "Stripe",
      "Tailwind",
      "Firebase",
      "Redux",
    ],
    description:
      "Pizza delivery website, that have user interface for ordering food and admin interface powered by SANITY for adding and editing products. Stripe payments are connected in test mode. Firebase stores data about orders and send them to admin interface.",
    image: pizzaScreen,
  },
  {
    href: "https://blog-bodya.vercel.app",
    name: "Blog",
    technologies: ["React", "NextJS", "Tailwind", "Firebase", "Context API"],
    description:
      "Website for creating posts, user can authorize via google account and then create, delete and edit posts. Posts created by any user will be shown to all.",
    image: blogScreen,
  },
  {
    href: "https://simple-ecommerce-website.vercel.app",
    name: "Ecommerce",
    technologies: [
      "React",
      "Tailwind",
      "Redux",
      "Next JS",
      "Fake Store API",
      "Stripe",
    ],
    description:
      "Simple Ecommerce website, based on data about products fetched from Fake Store API. I created this project using nextJS framework, tailwind css for styling, redux toolkit for state management and stripe checkout for payments (in test mode).",
    image: ecommerceScreen,
  },
  {
    href: "https://exerciser-power.netlify.app",
    name: "Exerciser",
    technologies: ["React", "Material UI", "Rapid API", "Context API"],
    description:
      "Website for searching new exercises. App contains more than thousand exersises. You can search them by name, or by group of muscles. Each exercise has GIF picture, that show correct technique for you.",
    image: exerciserScreen,
  },
  {
    href: "https://100films.netlify.app",
    name: "Films",
    technologies: ["React", "Material UI", "Rapid API", "Context API"],
    description:
      "Website about top 100 films of all time by IMBD. User can add them to Saved, view all details and watch trailer. Website using Local Storage to save user data.",
    image: filmsScreen,
  },
  {
    href: "https://allcocktailsapp.netlify.app",
    name: "Cocktails",
    technologies: ["React", "Material UI", "Cocktails API", "Context API"],
    description:
      "Website that fetch info about all cocktails in the world from Cocktails API. There is implemented search by name and also user can filter items by category. In addition user have ability to pick random cocktail.",
    image: cocktailsScreen,
  },
];
