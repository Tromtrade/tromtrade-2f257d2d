import { MessageSquare, ClipboardCheck, Wrench } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "1", title: "Võtke ühendust", desc: "Täitke hinnapäringu vorm või helistage. Vastame 24 tunni jooksul." },
  { icon: ClipboardCheck, num: "2", title: "Ülevaatus ja pakkumine", desc: "Hindame objekti, soovitame sobiva seadme ja esitame selge pakkumise." },
  { icon: Wrench, num: "3", title: "Paigaldus ja seadistus", desc: "Paigaldame seadme professionaalselt, seadistame ja juhendame kasutamist." },
];

const HowItWorks = () => (
  <section className="surface-warm py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Kuidas see käib?</h2>
        <p className="mt-3 text-muted-foreground">Lihtne ja läbipaistev protsess algusest lõpuni.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.num} className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl hero-gradient shadow-lg shadow-primary/20">
              <step.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground md:right-auto md:-top-3 md:left-1/2 md:translate-x-6">
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
