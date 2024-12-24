export default function Home() {
  return (
    <div>
      <main>
        <article>
          <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">Imagen 3</h1>

            <p className="text-lg text-gray-600">
              Our highest quality text-to-image model
            </p>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-cyan-600">
                Try it on Gemini →
              </button>

              <button className="border border-cyan-500 text-black font-medium px-6 py-3 rounded-full hover:border-cyan-600 hover:text-cyan-600">
                Try it on Vertex AI →
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
