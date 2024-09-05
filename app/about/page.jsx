import Image from "next/image";
import web from "/public/images/web.jpg";
import aichatbot from "/public/images/ai-chatbot.jpg";
import cybersecurity from "/public/images/cybersecurity.jpg";
import Testimonies from "../component/Testimonies/Testimonies";

export default function about() {
  return (
    <div className="text-lg">
      <h1 className="mt-10 my-5 text-4xl">About Us</h1>
      <p className="px-5 text-lg">
        At Anikus LLC, we&apos;ve built a reliable reputation over the years by
        delivering exceptional web design and advertising services across the
        United States. Our team&apos;s collaborative efforts result in
        outstanding products that set us apart from competitors. Businesses
        choose us for our trusted ability to build quality websites at
        affordable prices, and we&apos;ve consistently met our clients&apos;
        needs since our inception.
      </p>
      <div className="grid sm:grid-cols-2 gap-2 my-10 py-10 px-5 bg-mid-green">
        <div className="border-2 border-dark-green rounded-lg p-5 text-center ">
          <h2 className="pb-2">Our Misson</h2>
          <p>
            At Anikus LLC, our mission is to empower businesses by delivering
            innovative digital solutions that drive growth, enhance customer
            experiences, and create lasting value. We are committed to providing
            top-quality web development, AI chatbot, and cybersecurity services
            that help our clients succeed in a competitive, digital-first world.
          </p>
        </div>
        <div className="border-2 border-dark-green rounded-lg p-5 text-center ">
          <h2 className="pb-2">Our Vision</h2>
          <p>
            Our vision is to be a leading provider of digital solutions,
            recognized for our expertise, innovation, and dedication to client
            success. We strive to set the standard in web development, AI, and
            cybersecurity, helping businesses of all sizes thrive in the
            ever-evolving digital landscape.
          </p>
        </div>
      </div>
      <h2 className="text-2xl mt-10 mb-2">Our Services</h2>
      <div className=" grid sm:grid-cols-3 gap-4 p-5 ">
        <div className="flex flex-1 flex-col justify-start items-center shadow-lg rounded-lg p-2 transition-transform duration-500 transform hover:scale-105 hover:bg-white bg-mid-green">
          <h3 className="pb-2">Web Development</h3>
          <div className="overflow-hidden rounded-md">
            <Image src={web} alt="web service" className="" />
          </div>
          <p className="p-2 ">
            We offer top-tier web development services designed to elevate your
            business. Our experienced team creates custom, responsive, and
            user-friendly websites tailored to your specific needs. We focus on
            delivering high-performance, secure, and scalable web solutions that
            help you stand out in a competitive market. From concept to launch,
            we ensure your website not only looks great but also performs
            seamlessly, driving engagement and business growth. Trust us to
            bring your online vision to life with cutting-edge technology and
            unmatched expertise, ensuring your business thrives online.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-start items-center shadow-lg rounded-lg p-2 transition-transform duration-500 transform hover:scale-105 hover:bg-white bg-mid-green">
          <h3 className=" pb-2">Cyber Security</h3>
          <div className="overflow-hidden rounded-md">
            <Image src={cybersecurity} alt="cyber security" className="" />
          </div>
          <p className="p-2">
            We offer robust cybersecurity services designed to protect your
            digital assets and safeguard your business from evolving threats.
            Our team of experts provides comprehensive security solutions,
            including vulnerability assessments, threat detection, and real-time
            monitoring. We implement advanced security protocols to defend
            against cyber attacks, ensuring your data and systems remain secure.
            Whether you&apos;re a small business or a large enterprise, we
            tailor our cybersecurity strategies to meet your unique needs,
            giving you peace of mind. Trust us to keep your business safe.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-start items-center shadow-lg rounded-lg p-2 transition-transform duration-500 transform hover:scale-105 hover:bg-white bg-mid-green">
          <h3 className=" pb-2">AI Chatbot</h3>
          <div className="overflow-hidden rounded-md">
            <Image src={aichatbot} alt="ai chatbot" className="" />
          </div>
          <p className="p-2">
            We design AI chatbots as virtual customer representatives,
            seamlessly embedded into your website. Our chatbots provide instant,
            24/7 support, handling inquiries, guiding users, and enhancing
            customer satisfaction. With natural language processing and advanced
            learning capabilities, they deliver personalized, efficient, and
            human-like interactions, keeping your business connected around the
            clock. Elevate your customer service and streamline operations with
            our AI chatbot solutions, ensuring your business provides
            exceptional service and maintains strong customer relationships.
          </p>
        </div>
      </div>

      <div className="py-10 bg-mid-green my-5">
        <h2>Testimonies</h2>

        <div>
          <Testimonies />
        </div>
      </div>
    </div>
  );
}
