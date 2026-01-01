import businessCard1 from "@/assets/business-card-1.png";
import businessCard2 from "@/assets/business-card-2.png";
import businessCard3 from "@/assets/business-card-3.png";
import businessCard4 from "@/assets/business-card-4.png";
import businessCard5 from "@/assets/business-card-5.png";

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
];
