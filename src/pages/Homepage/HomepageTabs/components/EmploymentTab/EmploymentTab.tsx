import EmploymentCard from "./EmploymentCard";

type EmploymentTabType = {
  isMobile: boolean;
};

const EmploymentTab = ({ isMobile }: EmploymentTabType) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <EmploymentCard
        employer="Patient Zero"
        role="Junior Software Developer"
        description={[
          "TypeScript & C# (.NET)",
          "Full-stack feature development and maintenance",
          "Azure - AKS (Kubernetes), Virtual Machines, PIM access control & SQL Databases/Servers",
          "Pre-Production and Production deployments (Fortnightly)",
        ]}
        startDate="Nov 2024"
        isMobile={isMobile}
      />
      <EmploymentCard
        employer="IGA Burpengary"
        role="Produce Assistant"
        description={[
          "Updating pricing data in inventory and POS systems",
          "Tracking stock levels and updating system counts",
          "Replenishing stock",
        ]}
        startDate="June 2021"
        endDate="Nov 2024"
        isMobile={isMobile}
      />
      <EmploymentCard
        employer="IGA New Farm"
        role="Night Assistant"
        description={[
          "Ordering stock from suppliers",
          "Tracking stock levels and updating system counts",
          "Replenishing stock",
        ]}
        startDate="March 2020"
        endDate="June 2021"
        isMobile={isMobile}
      />
    </div>
  );
};

export default EmploymentTab;
