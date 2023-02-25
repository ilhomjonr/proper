import React, { useState } from "react";

const tariffPlans = [
  {
    name: "Basic",
    price: 10,
    discountPrice: 8,
    description: "Lorem ipsum dolor sit amet",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Premium",
    price: 20,
    discountPrice: 15,
    description: "Consectetur adipiscing elit",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    name: "Ultimate",
    price: 30,
    discountPrice: 25,
    description: "Sed do eiusmod tempor incididunt",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const TariffPlan = ({ plan, isSelected, onSelect }) => {
  return (
    <div
      className={`tariff-plan${isSelected ? " selected" : ""}`}
      onClick={() => onSelect(plan)}
    >
      <h3>{plan.name}</h3>
      <p className="price">{`$${plan.discountPrice}/month`}</p>
      {plan.discountPrice !== plan.price && (
        <p className="discounted-price">{`$${plan.price}/month`}</p>
      )}
      <p className="description">{plan.description}</p>
      <ul className="features">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const TariffPlanList = ({ plans, selectedPlan, onSelectPlan }) => {
  return (
    <div className="tariff-plan-list">
      {plans.map((plan, index) => (
        <TariffPlan
          key={index}
          plan={plan}
          isSelected={selectedPlan === plan}
          onSelect={onSelectPlan}
        />
      ))}
    </div>
  );
};

export default function TariffPlans() {
  const [selectedPlan, setSelectedPlan] = useState(tariffPlans[0]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container">
      <h2 className="title">Choose your plan</h2>
      <TariffPlanList
        plans={tariffPlans}
        selectedPlan={selectedPlan}
        onSelectPlan={handleSelectPlan}
      />
      <div className="selected-plan">
        <h3>Your selected plan</h3>
        <p className="name">{selectedPlan.name}</p>
        <p className="price">{`$${selectedPlan.discountPrice}/month`}</p>
        {selectedPlan.discountPrice !== selectedPlan.price && (
          <p className="discounted-price">{`$${selectedPlan.price}/month`}</p>
        )}
        <p className="description">{selectedPlan.description}</p>
        <ul className="features">
          {selectedPlan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
