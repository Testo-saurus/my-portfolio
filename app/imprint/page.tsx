export default function ImprintPage() {
  return (
    <main className="pt-16 sm:pt-20 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Imprint</h1>
      <section className="max-w-lg w-full text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          Jannik Strohbeck
          <br />
          Wexstr 23
          <br />
          20355 Hamburg
          <br />
          Germany
          <br />
          Email:{" "}
          <span
            className="select-all"
            style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
          >
            ed.xmg@kcebhorhtkinnaj
          </span>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Responsible for content
        </h2>
        <p>Jannik Strohbeck</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
        <p>
          Despite careful content control, I assume no liability for the content
          of external links. The operators of the linked pages are solely
          responsible for their content.
        </p>
      </section>
    </main>
  );
}
