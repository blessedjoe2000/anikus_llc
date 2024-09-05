export default function Footer() {
  return (
    <div className="bg-black-green text-white p-5 sm:p-10 text-center">
      <p>
        © Copyright {new Date().getFullYear()}{" "}
        <span className="font-bold">Anikus LLC.</span> All Rights Reserved{" "}
      </p>
    </div>
  );
}
