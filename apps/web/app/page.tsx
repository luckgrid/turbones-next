export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <header className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-2xl">Turbones Next.js App</h1>
        <p className="text-gray-500 text-sm">
          A barebones Next.js app with minimal TypeScript and TailwindCSS
          configurations using Turborepo.
        </p>
      </header>
    </main>
  );
}
