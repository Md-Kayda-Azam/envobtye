import wordPress from "@/assets/wordPress.png";
import contentWriting from "@/assets/contentWriting.png";
import monthlySeo from "@/assets/monthlySeo.png";
import previousWork1 from "@/assets/previous-work/previous-work-1.png";
import previousWork2 from "@/assets/previous-work/previous-work-2.png";
import previousWork3 from "@/assets/previous-work/previous-work-3.png";
import previousWork4 from "@/assets/previous-work/previous-work-4.png";
import previousWork5 from "@/assets/previous-work/previous-work-5.png";
import previousWork6 from "@/assets/previous-work/previous-work-6.png";
import previousWork7 from "@/assets/previous-work/previous-work-7.png";
import previousWork8 from "@/assets/previous-work/previous-work-8.png";
import starIcon from "@/assets/client-reviews/Star.png"; // Replace with your star icon image
import fiverrIcon from "@/assets/client-reviews/fiverr.png"; // Replace with your Fiverr icon
import upworkIcon from "@/assets/client-reviews/upwork.png"; // Replace with your Upwork icon
import client1 from "@/assets/client-reviews/client2.png"; // Replace with your client images
import client2 from "@/assets/client-reviews/client2.png";
import client3 from "@/assets/client-reviews/client2.png";
import client4 from "@/assets/client-reviews/client2.png";
// Import StaticImageData for type safety
import { StaticImageData } from "next/image";
interface Review {
  id: number;
  review: string;
  clientImage: any;
  name: string;
  platform: any;
  platformIcon: any;
}
interface Service {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}
interface PreviousWork {
  id: number;
  image: string | StaticImageData;
}

type ServicesData = {
  [key: string]: Service[];
};
type PreviousWorkData = {
  [key: string]: PreviousWork[];
};

export const servicesData: ServicesData = {
  WEBSITE: [
    {
      id: 1,
      title: "WordPress Website",
      description: "Design & Development",
      image: wordPress,
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Shopify & WooCommerce",
      image: contentWriting,
    },
    {
      id: 3,
      title: "Custom Web Development",
      description: "Tailored solutions",
      image: monthlySeo,
    },
  ],
  "UI/UX": [
    {
      id: 1,
      title: "Website UI Design",
      description: "Modern & Responsive",
      image: wordPress,
    },
    {
      id: 2,
      title: "Mobile App UI",
      description: "iOS & Android designs",
      image: contentWriting,
    },
    {
      id: 3,
      title: "User Experience Audit",
      description: "Improve usability",
      image: monthlySeo,
    },
  ],
  SEO: [
    {
      id: 1,
      title: "On-Page SEO",
      description: "Optimize content",
      image: wordPress,
    },
    {
      id: 2,
      title: "Technical SEO",
      description: "Site performance",
      image: contentWriting,
    },
    {
      id: 3,
      title: "Monthly SEO",
      description: "Rank #1 on Google",
      image: monthlySeo,
    },
  ],
  "LOGO DESIGN": [
    {
      id: 1,
      title: "Custom Logo Design",
      description: "Unique brand identity",
      image: wordPress,
    },
    {
      id: 2,
      title: "Logo Redesign",
      description: "Refresh your brand",
      image: contentWriting,
    },
    {
      id: 3,
      title: "Logo Animation",
      description: "Dynamic brand assets",
      image: monthlySeo,
    },
  ],
  "BANNER DESIGN": [
    {
      id: 1,
      title: "Web Banner Design",
      description: "Display ads",
      image: wordPress,
    },
    {
      id: 2,
      title: "Social Media Banners",
      description: "Platform-specific",
      image: contentWriting,
    },
    {
      id: 3,
      title: "Animated Banners",
      description: "Eye-catching ads",
      image: monthlySeo,
    },
  ],
  "GOOGLE ADS": [
    {
      id: 1,
      title: "Search Ad Campaign",
      description: "Targeted keywords",
      image: wordPress,
    },
    {
      id: 2,
      title: "Display Ad Campaign",
      description: "Visual ads",
      image: contentWriting,
    },
    {
      id: 3,
      title: "Remarketing Ads",
      description: "Re-engage visitors",
      image: monthlySeo,
    },
  ],
};
export const previousWorkData1: PreviousWorkData = {
  WEBSITE: [
    { id: 1, image: previousWork2 },
    { id: 2, image: previousWork3 },
    { id: 3, image: previousWork1 },
    { id: 4, image: previousWork4 },
  ],
  "UI/UX": [
    { id: 1, image: previousWork3 },
    { id: 2, image: previousWork1 },
    { id: 3, image: previousWork4 },
    { id: 4, image: previousWork2 },
  ],
  SEO: [
    { id: 1, image: previousWork4 },
    { id: 2, image: previousWork3 },
    { id: 3, image: previousWork1 },
    { id: 4, image: previousWork2 },
  ],
  "LOGO DESIGN": [
    { id: 1, image: previousWork1 },
    { id: 2, image: previousWork3 },
    { id: 3, image: previousWork4 },
    { id: 4, image: previousWork2 },
  ],
  "BANNER DESIGN": [
    { id: 1, image: previousWork1 },
    { id: 2, image: previousWork3 },
    { id: 3, image: previousWork2 },
    { id: 4, image: previousWork4 },
  ],
  "GOOGLE ADS": [
    { id: 1, image: previousWork4 },
    { id: 2, image: previousWork2 },
    { id: 3, image: previousWork1 },
    { id: 4, image: previousWork4 },
  ],
};

export const previousWorkData2: PreviousWorkData = {
  WEBSITE: [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
  "UI/UX": [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
  SEO: [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
  "LOGO DESIGN": [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
  "BANNER DESIGN": [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
  "GOOGLE ADS": [
    { id: 5, image: previousWork5 },
    { id: 6, image: previousWork7 },
    { id: 7, image: previousWork6 },
    { id: 8, image: previousWork8 },
  ],
};

// Review Data
export const reviews: Review[] = [
  {
    id: 1,
    name: "Stephanie Powell",
    platform: "Fiverr",
    platformIcon: fiverrIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client1,
  },
  {
    id: 2,
    name: "Brian Clark",
    platform: "Upwork",
    platformIcon: upworkIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client2,
  },
  {
    id: 3,
    name: "Christopher White",
    platform: "Upwork",
    platformIcon: upworkIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client3,
  },
  {
    id: 4,
    name: "Brian Clark",
    platform: "Fiverr",
    platformIcon: fiverrIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client4,
  },
  {
    id: 5,
    name: "Christopher White",
    platform: "Upwork",
    platformIcon: upworkIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client2,
  },
  {
    id: 6,
    name: "Stephanie Powell",
    platform: "Fiverr",
    platformIcon: fiverrIcon,
    review:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
    clientImage: client3,
  },
];
