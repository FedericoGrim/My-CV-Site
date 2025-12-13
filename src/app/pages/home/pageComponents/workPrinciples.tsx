import Label from "@/components/Label/Label"

export default function WorkPrinciples() {
  return (
    <section className="bg-cover bg-center w-full" style={{ backgroundImage: "url('/My-CV-Site/images/CodeGreenBackground.jpg')" }}>
        <div className="relative z-10 text-center px-4 py-10 bg-black/50">
        <Label
            text="Lavoro con dei principi:"
            className="font-Teko text-5xl text-MantisGreen w-auto "
            font="teko"
        />
        <p className="text-white text-base mt-2 max-w-xl mx-auto">
            In informatica, credo che seguire dei principi sia fondamentale per creare software di qualità e duraturo, così nel tempo mentre affinavo le mie abilità, ho sviluppato i miei principi di lavoro che seguo sempre quando sviluppo software.
        </p>
        <ul className="text-white text-lg mt-6 max-w-2xl mx-auto text-left list-disc list-inside space-y-2">
            <li>🔧 Scrivo codice semplice e leggibile.</li>
            <li>🧱 Progetto sistemi manutenibili e scalabili.</li>
            <li>📐 Seguo principi solidi di design e architettura.</li>
            <li>🧠 Penso prima, codice dopo.</li>
            <li>🧠 Penso prima, codice dopo.</li>
            <li>🧠 Penso prima, codice dopo.</li>
        </ul>
        </div>
    </section>
    );
}