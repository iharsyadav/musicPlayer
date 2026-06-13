import ThemeSelector from "../components/ui/ThemeSelector";

function TestPage() {
  return (
    <main className="app-page min-h-screen p-6 md:p-10 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="blob bg-coral w-72 h-72 -top-20 -left-20" />

      <div className="blob bg-mint w-80 h-80 top-40 -right-32" />

      <div className="blob bg-sun w-64 h-64 bottom-0 left-1/3" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="app-heading text-5xl mb-2">
              Theme System Demo
            </h1>

            <p className="text-muted-foreground">
              Light & Dark Mode using Theme Provider
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="app-card">
            <h2 className="text-2xl font-semibold mb-3">
              Theme Aware Card
            </h2>

            <p>
              This card automatically changes when
              dark/light mode changes.
            </p>
          </div>

          <div className="app-card">
            <h2 className="text-2xl font-semibold mb-3">
              Design Tokens
            </h2>

            <p>
              Colors come from CSS variables and
              update globally.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="app-button">
            Primary Button
          </button>

          <button className="glass px-6 py-3 rounded-xl">
            Glass Button
          </button>
        </div>

        {/* Theme Demo */}
        <div className="mt-10 app-card">
          <ThemeSelector />

          <h3 className="text-xl font-semibold mb-4 mt-4">
            Current Theme Colors
          </h3>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary" />
            <div className="w-12 h-12 rounded-full bg-accent" />
            <div className="w-12 h-12 rounded-full bg-secondary" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TestPage;