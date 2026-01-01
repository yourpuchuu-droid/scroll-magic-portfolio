import businessCard1 from "@/assets/business-card-1.png";
import businessCard2 from "@/assets/business-card-2.png";
import businessCard3 from "@/assets/business-card-3.png";
import businessCard4 from "@/assets/business-card-4.png";
import businessCard5 from "@/assets/business-card-5.png";

import yoga1 from "@/assets/yoga-1.jpg";
import yoga2 from "@/assets/yoga-2.png";
import yoga3 from "@/assets/yoga-3.png";
import yoga4 from "@/assets/yoga-4.png";
import yoga5 from "@/assets/yoga-5.jpg";
import yoga6 from "@/assets/yoga-6.jpg";
import yoga7 from "@/assets/yoga-7.jpg";
import yoga8 from "@/assets/yoga-8.jpg";
import yoga9 from "@/assets/yoga-9.jpg";
import yoga10 from "@/assets/yoga-10.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "botanical-business-card",
    title: "Botanical Business Card",
    category: "Brand Identity Design",
    description:
      "An elegant business card design featuring botanical illustrations and a refined floral wreath logo. The design combines teal and cream colors with delicate line art for a sophisticated, nature-inspired brand identity.",
    image: businessCard1,
    images: [businessCard1, businessCard2, businessCard3, businessCard4, businessCard5],
  },
  {
    slug: "yoga-class-flyer",
    title: "Yoga Class Flyer",
    category: "Print Design",
    description:
      "A modern and dynamic flyer design for yoga classes featuring bold typography, organic curved shapes, and striking imagery. The dark color palette with white accents creates a calming yet professional aesthetic perfect for wellness brands.",
    image: yoga1,
    images: [yoga1, yoga2, yoga3, yoga4, yoga5, yoga6, yoga7, yoga8, yoga9, yoga10],
  },
];
