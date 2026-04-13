import { Shield, Clock, Award, ThumbsUp } from "lucide-react";
import { company } from "@/config/company";

const items = [
  { icon: Clock, label: "Kiire reageerimine", desc: "Vastame 24h jooksul" },
  { icon: Shield, label: `${company.guaranteeYears}a garantii`, desc: "Kõigile paigaldustöödele" },
  { icon: Award, label: "Sertifitseeritud", desc: "F-gaasi pädevus, EVUL liige" },
  { icon: ThumbsUp, label: `${company.experience.installationsPerYear}+ paigaldust/a`, desc: "Rahulolevat klienti" },
];

const TrustBar = () => (
  <section className="border-b border-border trust-bg" aria-label="Usalduse näitajad">
    <div className="container py-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
