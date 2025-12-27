export default function App() {
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="max-w-md w-full rounded-2xl border p-6 shadow-sm">
        <h1 className="text-2xl font-mediums ">Bootcamp React + Tailwindcss</h1>
        <p className="mt-2 text-sm text-gray-600">
          W0D0-N1: Vite + Tailwindcss configurados e rodando
        </p>
        <div className="mt-4 flex gap-2">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs">
            Node 24
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs">
            pnpm
          </span>
        </div>
      </div>
    </div>
  );
}
