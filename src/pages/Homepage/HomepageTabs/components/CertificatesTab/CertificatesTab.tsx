import CertificateCard from "./CertificateCard";
import AZURE_AI_FUNDAMENTALS from "../../../../../assets/certificates/azure-ai-fundamentals.pdf";

type CertificatesTabType = {
  isMobile: boolean;
};

const CertificatesTab = ({ isMobile }: CertificatesTabType) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <CertificateCard
        title="Azure AI Fundamentals"
        company="Microsoft"
        issued="09/04/2024"
        file={AZURE_AI_FUNDAMENTALS}
        isMobile={isMobile}
      />
    </div>
  );
};

export default CertificatesTab;
