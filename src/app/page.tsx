"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { MessageCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SiliconFort"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SiliconFort"
          description="Professional Web & App Development Services - Transforming Your Digital Vision Into Reality"
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "View Our Work", href: "portfolio" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-modern-software-dashboard-interface-sh-1772611120986-8671b300.png"
          imageAlt="Modern software dashboard interface"
          showDimOverlay={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Delivering Excellence in" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-diverse-team-of-software-developers-an-1772611119381-479834a3.png", alt: "SiliconFort Team" },
            { type: "text", content: "Software Development Since 2018" }
          ]}
          buttons={[
            { text: "Learn More About Us", href: "#services" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Core Services"
          description="We specialize in cutting-edge web and mobile solutions designed to drive your business forward"
          tag="Services"
          features={[
            {
              title: "Web Development",              description: "Custom websites and web applications built with the latest technologies for maximum performance and scalability",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-web-developer-working-on-a-computer-di-1772611120254-1bf231dd.png",              imageAlt: "Web Development Services",              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "App Development",              description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-mobile-app-development-workspace-showi-1772611119232-b1ca650f.png",              imageAlt: "Mobile App Development",              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "UI/UX Design",              description: "Beautiful, intuitive designs that engage users and drive conversions. From wireframes to final implementation",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-creative-design-studio-scene-with-desi-1772611121380-2f794661.png",              imageAlt: "Design Services",              button: { text: "Learn More", href: "contact" }
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Featured Projects"
          description="Explore our portfolio of successful projects and see what we've delivered for satisfied clients"
          tag="Portfolio"
          products={[
            {
              id: "1",              brand: "SiliconFort",              name: "E-Commerce Platform Redesign",              price: "Completed 2023",              rating: 5,
              reviewCount: "35 Reviews",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-modern-website-portfolio-showcase-feat-1772611120301-d3d2f41f.png",              imageAlt: "E-Commerce Project"
            },
            {
              id: "2",              brand: "SiliconFort",              name: "Social Media Mobile App",              price: "Completed 2023",              rating: 5,
              reviewCount: "28 Reviews",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-mobile-application-interface-for-a-soc-1772611119574-608d42b7.png",              imageAlt: "Mobile App Project"
            },
            {
              id: "3",              brand: "SiliconFort",              name: "Business Analytics Dashboard",              price: "Completed 2024",              rating: 5,
              reviewCount: "32 Reviews",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/a-business-dashboard-web-application-wit-1772611120615-3ffdc05a.png",              imageAlt: "Dashboard Project"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Don't just take our word for it—hear from the businesses we've transformed"
          testimonials={[
            {
              id: "1",              name: "Zeeshan Malik",              handle: "CEO, Tech Solutions",              testimonial: "I can't say enough good things about the developers who handled the redesign of my website. They were an absolute pleasure to work with. Their professionalism, attention to detail, and prompt communication made the entire process smooth and successful.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-business-prof-1772611119489-f02888c1.png",              imageAlt: "Zeeshan Malik"
            },
            {
              id: "2",              name: "Shahzaib Raza",              handle: "Director, Digital Marketing",              testimonial: "The developers who redesigned my website did an outstanding job. Their professionalism and cooperation throughout the process were remarkable. I am extremely impressed with the final results. My website now looks modern and user-friendly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-female-entrep-1772611118144-7d9acc8f.png",              imageAlt: "Shahzaib Raza"
            },
            {
              id: "3",              name: "Kevin Hodgson",              handle: "Founder, StartupXYZ",              testimonial: "SiliconFort did a great job redesigning my website. The new website is more user-friendly and looks great. The team understood my vision and delivered beyond expectations. I'd be happy to work with them again.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-male-tech-ent-1772611118540-2ada1fcb.png",              imageAlt: "Kevin Hodgson"
            },
            {
              id: "4",              name: "Sarah Johnson",              handle: "CTO, InnovateLab",              testimonial: "Working with SiliconFort has been transformative for our digital presence. Their team's expertise in both frontend and backend development is unmatched. They delivered our project on time and within budget.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-business-dire-1772611120447-ae140668.png",              imageAlt: "Sarah Johnson"
            },
            {
              id: "5",              name: "Michael Chen",              handle: "Product Manager, CloudSync",              testimonial: "The mobile app SiliconFort developed for us has exceeded all our expectations. The user experience is intuitive, and the code quality is excellent. Highly recommend them for any development project.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-startup-found-1772611118744-777a3ee7.png",              imageAlt: "Michael Chen"
            },
            {
              id: "6",              name: "Emily Rodriguez",              handle: "Marketing Director, GrowthCo",              testimonial: "SiliconFort's design and development team created a stunning website that perfectly captures our brand identity. Customer engagement has increased significantly since launch. They're true professionals.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATKIwRCMku0zGr05w01icwAyTT/professional-headshot-of-a-product-manag-1772611119979-1390072c.png",              imageAlt: "Emily Rodriguez"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Get Started?"
          ctaDescription="Contact us today to discuss your project and let's create something amazing together"
          ctaButton={{ text: "Contact Us Now", href: "tel:+923344445762" }}
          ctaIcon={MessageCircle}
          faqs={[
            {
              id: "1",              title: "What services do you offer?",              content: "We offer comprehensive software development services including web development, mobile app development (iOS & Android), UI/UX design, and digital transformation consulting. Our team specializes in building scalable, user-friendly solutions tailored to your business needs."
            },
            {
              id: "2",              title: "How long does a typical project take?",              content: "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while a complex mobile app could take 3-6 months. We provide detailed timelines during the initial consultation and maintain regular progress updates."
            },
            {
              id: "3",              title: "What is your development process?",              content: "We follow an agile methodology with clear phases: discovery & planning, design, development, testing, and deployment. We maintain transparent communication with regular updates and demos to ensure the final product meets your expectations."
            },
            {
              id: "4",              title: "Do you provide post-launch support?",              content: "Yes, we provide comprehensive post-launch support including bug fixes, performance optimization, feature updates, and maintenance. We offer flexible support packages to suit your needs."
            }
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SiliconFort"
          columns={[
            {
              items: [
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              items: [
                { label: "Phone", href: "tel:+923344445762" },
                { label: "Email", href: "mailto:info@siliconfort.com" },
                { label: "Lahore, Pakistan", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
