import { MapPin } from "lucide-react";

const areas = [
  "Lekki", "Victoria Island", "Ikeja", "Surulere",
  "Yaba", "Ajah", "Ikoyi", "Maryland",
];

const DeliveryAreas = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            📍 Delivery Areas
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            We currently deliver to these locations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 font-body text-card-foreground"
            >
              <MapPin size={16} className="text-primary" />
              {area}
            </span>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-body mt-6">
          Not in these areas? Message us — we might still be able to deliver to you!
        </p>
      </div>
    </section>
  );
};

export default DeliveryAreas;
