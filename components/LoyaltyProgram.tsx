import React from "react";

function LoyaltyProgram() {
  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-sm gradient-card shadow-card">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star h-5 w-5 text-primary"
            data-lov-id="src/components/LoyaltyProgram.tsx:89:10"
            data-lov-name="Star"
            data-component-path="src/components/LoyaltyProgram.tsx"
            data-component-line="89"
            data-component-file="LoyaltyProgram.tsx"
            data-component-name="Star"
            data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          Loyalty Program
        </h3>
      </div>
      {/* Container */}
      <div className="p-6 pt-0 space-y-6"></div>
    </section>
  );
}

export default LoyaltyProgram;
