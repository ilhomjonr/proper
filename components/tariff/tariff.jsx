import styles from "./tariff.module.css";
import { down_right, gift } from "public/icons";
const Tariff = () => {
  const plans = [
    {
      name: "Basic",
      price_after: "$1",
      price_before: "$220",
      discount_percent: "25",
      features: [
        "Feature 1",
        "Домашние задания и их подробный разбор",
        "Feature 3",
      ],
    },
    {
      name: "Pro",
      price_after: "$20",
      price_before: "$220",
      discount_percent: "25",
      features: [
        "Feature 1",
        "Домашние задания и их подробный разбор",
        "Feature 3",
        "Feature 4",
      ],
    },
    {
      name: "Premium",
      price_after: "$30",
      price_before: "$220",
      discount_percent: "25",
      features: [
        "Feature 1",
        "Домашние задания и их подробный разбор",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <>
      <div className="container">
        <div>
          <p className="h1a">Тарифы</p>
          <div className={styles.plans}>
            {plans.map((plan, index) => (
              <TariffPlan key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tariff;

export function TariffPlan({ plan }) {
  return (
    <div className={styles.tariffPlan}>
      <div>
        <p className={styles.name}>{plan.name}</p>
        <div className={styles.line}></div>
        <ul className={styles.features}>
          {plan.features.map((feature, index) => (
            <li key={index}>
              {down_right}
              {feature}
            </li>
          ))}
        </ul>
        <div className={styles.sale}>
          {gift}
          <button
            className={styles.sale_percent}
          >{`${plan.discount_percent} % skidka`}</button>
        </div>
      </div>
      <div className={styles.bottom_cont}>
        <div className={styles.bottom}>
          <div>
            <p className={styles.pricesbefore}>Стоимость участия</p>
          </div>

          <div className={styles.price}>
            <p className={styles.price_after}>{plan.price_after}</p>
            <p className={styles.price_before}>{plan.price_before}</p>
          </div>

          <button className={styles.button}>purchase</button>
        </div>
      </div>
    </div>
  );
}
