import Banner from "./component/Banner/Banner";

export default function Home() {
  return (
    <main className=" We are Anikus LLC - Your Trusted Ally in IT Consulting">
      <div>
        <h1 className=" mx-5 sm:mx-10 lg:pt-20 lg:pb-10 md:pt-10 md:pb-5 sm:py-5 lg:text-5xl md:text-4xl sm:text-2xl font-bold">
          We are Anikus LLC - Your Trusted Ally in IT Consulting
        </h1>
        <Banner />
      </div>
    </main>
  );
}
