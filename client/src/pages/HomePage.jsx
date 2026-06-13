import ThemeSelector from "@/components/ui/ThemeSelector";
import Users from "../components/user/User";

function HomePage() {
  return (
    <main className="app-page min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <span className="inline-block mb-4 px-3 py-1 rounded-full glass text-sm">
          React + Tailwind Starter
        </span>
        <Users/>
      </section>
    </main>
  );
}

export default HomePage;
