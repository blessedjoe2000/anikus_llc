import Link from "next/link";
import Banner from "./component/Banner/Banner";

export default function Home() {
  return (
    <main className=" We are Anikus LLC - Your Trusted Ally in IT Consulting">
      <div>
        <h1 className=" mx-5 sm:mx-10 sm:pt-20 sm:pb-5 pt-10 pb-0 lg:text-5xl md:text-4xl sm:text-2xl font-bold">
          We are Anikus LLC - Your Trusted Ally in IT Consulting
        </h1>
        <Banner />
        <div className="p-5 my-10 bg-mid-green">
          <h2 className="py-5">Discovery about our services</h2>
          <p>
            Anikus LLC is a trusted provider of web development, AI chatbot, and
            cybersecurity services across the United States. We blend the
            expertise of skilled developers, AI specialists, and cybersecurity
            professionals to deliver reliable, efficient, and innovative digital
            solutions tailored to your business needs.
          </p>
          <p className="py-5">
            Our focus is on achieving the best strategic outcomes for your
            digital initiatives, helping clients excel in the competitive online
            market. Dedicated to success, our team ensures each project delivers
            exceptional results, earning recognition for our commitment to
            excellence.
          </p>
          <p>
            Anikus LLC connects businesses with their audiences by offering
            world-class web development, AI chatbot integration, and
            comprehensive cybersecurity services. Our dedication to client
            satisfaction and quality sets us apart, making us the preferred
            partner for businesses looking to enhance their digital footprint.
          </p>
          <p className="py-5">
            Whether you&apos;re launching a new website, improving customer
            service with AI, or securing your digital assets, Anikus LLC is your
            go-to partner for success. Let us bring your vision to life with
            cutting-edge technology and expertise.
          </p>
          <Link
            href="/about"
            className="bg-green px-5 py-2 text-white rounded-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
