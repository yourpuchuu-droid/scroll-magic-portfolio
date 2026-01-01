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
    slug: "yoga-class-branding",
    title: "Yoga Class — Brand Identity",
    category: "Brand Identity",
    description:
      "Minimalist dark-themed branding package for a yoga studio, featuring integrated typography with yoga pose imagery, class schedule cards, and promotional materials.",
    image: yoga1,
    images: [yoga1, yoga2, yoga3, yoga4, yoga5, yoga6, yoga7, yoga8, yoga9, yoga10],
  },
  {
    slug: "business-card-design",
    title: "Business Card — Professional Identity",
    category: "Print Design",
    description:
      "Elegant and professional business card design with clean typography, sophisticated color palette, and modern layout showcasing brand identity and contact information.",
    image: businessCard1,
    images: [businessCard1, businessCard2, businessCard3, businessCard4, businessCard5],
  },
  {
    slug: "technova-logo",
    title: "TechNova — Logo Design",
    category: "Logo Design",
    description:
      "Modern and dynamic logo design for TechNova featuring sleek typography, innovative iconography, and versatile mockup presentations across various applications.",
    image: logoMockup1,
    images: [logoMockup1, logoMockup2, logoMockup3, logoMockup4, logoMockup5],
  },
  {
    slug: "flyer-design",
    title: "Flyer Design — Print & Social",
    category: "Print Design",
    description:
      "Professional flyer designs created for both print (A4 format) and social media platforms. Featuring eye-catching layouts, compelling visuals, and effective communication design for promotional and marketing purposes.",
    image: dairy1,
    images: [dairy1, dairy2],
  },
  {
    slug: "letterhead-design",
    title: "Letterhead — Professional Stationery",
    category: "Print Design",
    description:
      "Professional letterhead design with integrated business card mockup. Elegant stationery design featuring clean typography, sophisticated layout, and cohesive brand identity for professional correspondence.",
    image: stationery1,
    images: [stationery1],
  },
];
