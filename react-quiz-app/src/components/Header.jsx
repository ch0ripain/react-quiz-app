export default function Header({ title = "react quiz" }) {
  return (
    <header className="text-center p-2">
      <h1 className=" text-white uppercase font-gamer text-9xl">{title}</h1>
    </header>
  );
}
