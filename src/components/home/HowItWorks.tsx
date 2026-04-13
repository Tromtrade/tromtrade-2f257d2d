import { MessageSquare, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "1", title: "Esita päring või helista", desc: "Võtke ühendust telefoni, WhatsAppi või vormi kaudu." },
  { icon: ClipboardCheck, num: "2", title: "Selgitame vajaduse ja teeme pakkumise", desc: "Hindame objekti ja koostame selge hinnapakkumise." },
  { icon: Wrench, num: "3", title: "Teostame paigalduse kokkulepitud ajal", desc: "Professionaalne töö kokkulepitud ajal ja kohas." },
  { icon: CheckCircle, num: "4", title: "Anname üle testitud süsteemi", desc: "Seade on seadistatud, testitud ja valmis kasutamiseks." },
];

const HowItWorks = () => (
  <section className="surface-warm py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Kuidas tööprotsess käib?</h2>
        <p className="mt-3 text-muted-foreground">Lihtne ja läbipaistev protsess algusest lõpuni.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.num} className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl hero-gradient shadow-lg shadow-primary/20">
              <step.icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground md:right-auto md:-top-3 md:left-1/2 md:translate-x-6" aria-hidden="true">
              {step.num}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
