import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import heal from "../assets/heal.jpg";
import Loyalty from "../assets/Loyalty.jpg";
import yoma from "../assets/yoma.jpg";
import corporate from "../assets/corporate.jpg";
import portfolio from "../assets/portfolio.jpg";
import landingpage from "../assets/landingpage.jpg";
import RealEstateIndustry from "../assets/RealEstateIndustry.jpg";
import Elearning from "../assets/Elearning.jpg";
import Ngo from "../assets/Ngo.jpg";
import Shopify from "../assets/Shopify.jpg";
import Woocommerce from "../assets/Woocommerce.jpg";
import Cart from "../assets/Cart.jpg";

const imageMap = [
  heal,
  Loyalty,
  yoma,
  corporate,
  portfolio,
  landingpage,
  RealEstateIndustry,
  Elearning,
  Ngo,
  Shopify,
  Woocommerce,
  Cart,
];

const fetchCaseStudies = async () => {
  const { data } = await axios.get("https://dummyjson.com/posts?limit=12");

  // DummyJSON returns an object with a 'posts' array
  return data.posts.map((post, index) => ({
    id: post.id,
    // Cycle through categories for variety
    category:
      index % 3 === 0 ? "app" : index % 3 === 1 ? "website" : "ecommerce",
    title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
    brand: `Client ${post.userId}`,
    img: imageMap[index % imageMap.length],
    description: post.body,
  }));
};

export const useCaseStudies = () => {
  return useQuery({
    queryKey: ["caseStudies"],
    queryFn: fetchCaseStudies,
  });
};
