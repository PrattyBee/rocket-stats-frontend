import Navbar from "./components/shared/navbar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-64 flex-2"></div>
      <div className="w-64 flex-1">
        <Navbar />
      </div>
      <div className="w-64 flex-2"></div>
    </div>
  );
}
