import Header from "@/view/header/Header";
import HeroSection from "@/view/hero-section/HeroSection";
import AvailableServices from "@/view/available-services/AvailableServices";
import GetYourAnswers from "@/view/get-you-answer/GetYouAnswer";
import CheckOurPreviousWork from "@/view/check-our-previous-work/CheckOurPreviousWork";
import HowWeWork from "@/view/how-we-work/HowWeWork";
import ClientReviews from "@/view/client-reviews/ClientReviews";
import TeamMember from "@/view/team-member/TeamMember";
import FAQSection from "@/view/fqa-section/FQASection";
import ContactUs from "@/view/contact-us/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroSection />
      <AvailableServices />
      <GetYourAnswers />
      <CheckOurPreviousWork />
      <HowWeWork />
      <ClientReviews />
      <TeamMember />
      <FAQSection />
      <ContactUs />
    </div>
  );
}
