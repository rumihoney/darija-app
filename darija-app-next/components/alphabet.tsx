import { units } from "../data/units";

type AlphabetProps = {
  onBack: () => void;
};

export default function Alphabet({ onBack }: AlphabetProps) {
  return (
    <main className="alphabet-page">

      <button
        className="back-button"
        onClick={onBack}
      >
        Back
      </button>

      <h1>Alphabet</h1>

      <div id="alphabet">

        {units.unit1.letters.map((letter) => (
          <div
            className="letter-card"
            key={letter.arabic}
          >

            <span className="arabic">
              {letter.arabic}
            </span>

            <span className="latin">
              {letter.latin.join(" / ")}
            </span>

            <span className="ipa">
              {letter.ipa.join(" / ")}
            </span>

          </div>
        ))}

      </div>

    </main>
  );
}