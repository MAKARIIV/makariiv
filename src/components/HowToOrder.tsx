const steps = [
  { number: "1", title: "Browse the Menu", description: "Check out our items above and pick what you want." },
  { number: "2", title: "Tap the WhatsApp Button", description: "Click any green button to start a chat with us." },
  { number: "3", title: "Confirm & Pay", description: "Tell us your order details and we'll send payment info." },
  { number: "4", title: "Get It Delivered", description: "Sit back and relax — your order is on the way!" },
];

const HowToOrder = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            📋 How to Order
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            It's super easy — just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 bg-card rounded-2xl border border-border p-6"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-card-foreground text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
