export default function Home() {
  return (
    <div>
      <main>
        <article>
          <div>
            <div className="glue-grid__col glue-grid__col--span-12 gemini-page-cover__content-row ">
              <h1
                className="gemini-page-cover__headline glue-headline gemini-in-view-element gemini-in-view-element--in-view"
                data-in-view=""
              >
                Imagen 3
              </h1>
              <div
                className="gemini-page-cover__paragraph gemini-in-view-element gemini-in-view-element--out-view-top gemini-in-view-element--in-view"
                data-in-view=""
              >
                <p data-block-key="bink0">
                  Our highest quality text-to-image model
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-4 py-2 rounded-full shadow hover:from-blue-600 hover:to-cyan-600">
                  Try it on Gemini →
                </button>

                <button className="border border-cyan-500 text-black font-medium px-4 py-2 rounded-full hover:border-cyan-600 hover:text-cyan-600">
                  Try it on Vertex AI →
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
