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

import logoMockup1 from "@/assets/logo-mockup-1.png";
import logoMockup2 from "@/assets/logo-mockup-2.png";
import logoMockup3 from "@/assets/logo-mockup-3.png";
import logoMockup4 from "@/assets/logo-mockup-4.png";
import logoMockup5 from "@/assets/logo-mockup-5.png";

import dairy1 from "@/assets/dairy-1.jpg";
import dairy2 from "@/assets/dairy-2.png";

import stationery1 from "@/assets/stationery-1.png";

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
  {
    slug: "luxe-beauty-branding",
    title: "Luxe Beauty Branding",
    category: "Logo & Brand Identity",
    description:
      "A sophisticated brand identity for a luxury beauty salon featuring an elegant gold logo with graceful flowing lines. The design includes premium signage mockups, embossed stationery, and cohesive brand applications that exude refinement and exclusivity.",
    image: logoMockup1,
    images: [logoMockup1, logoMockup2, logoMockup3, logoMockup4, logoMockup5],
  },
  {
    slug: "milk-meadows-branding",
    title: "Milk & Meadows",
    category: "Marketing & Social Media",
    description:
      "A comprehensive marketing design package for an organic dairy brand specializing in A2 Gir Cow milk and traditional Bilona Ghee. The designs feature a rich teal and gold color palette with elegant typography, showcasing premium product photography and authentic brand storytelling.",
    image: dairy1,
    images: [dairy1, dairy2],
  },
  {
    slug: "milk-meadows-stationery",
    title: "Milk & Meadows Stationery",
    category: "Corporate Identity",
    description:
      "A cohesive corporate stationery design for the Milk & Meadows dairy brand featuring elegant letterhead with a soft pink watermark logo. The minimalist design combines coral accents with clean typography for a professional yet approachable brand presence.",
    image: stationery1,
    images: [stationery1],
  },
];
