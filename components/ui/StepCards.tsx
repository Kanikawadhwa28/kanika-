export type Step = {
  num: string;
  icon: string;
  title: string;
  desc: string;
};

type StepCardsProps = {
  steps: Step[];
};

export default function StepCards({ steps }: StepCardsProps) {
  return (
    <div className="hiw-grid">
      {steps.map((step) => (
        <div key={step.num} className="hiw-step">
          <div className="hiw-n">{step.num}</div>
          <span className="hiw-icon">{step.icon}</span>
          <div className="hiw-ttl">{step.title}</div>
          <p className="hiw-d">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

