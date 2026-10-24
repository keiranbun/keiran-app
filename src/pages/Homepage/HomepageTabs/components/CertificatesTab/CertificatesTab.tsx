import CertificateCard from "./CertificateCard";
import AZURE_AI_FUNDAMENTALS from "../../../../../assets/certificates/azure-ai-fundamentals.pdf";
import AZURE_DATA_FUNDAMENTALS from "../../../../../assets/certificates/azure-data-fundamentals.pdf";
import AWS_AI_PRACTITIONER from "../../../../../assets/certificates/aws-certified-ai-practitioner.pdf";
import PYTHON from "../../../../../assets/certificates/python.pdf";
import DATABASES from "../../../../../assets/certificates/databases.pdf";
import JAVASCRIPT from "../../../../../assets/certificates/javascript.pdf";

type CertificatesTabType = {
  isMobile: boolean;
};

const CertificatesTab = ({ isMobile }: CertificatesTabType) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <div>
        <CertificateCard
          title="AWS AI Practitioner"
          company="Amazon"
          issued="16/12/2025"
          expired="16/12/2026"
          file={AWS_AI_PRACTITIONER}
          isMobile={isMobile}
        />
        <CertificateCard
          title="Azure AI Fundamentals"
          company="Microsoft"
          issued="09/04/2024"
          file={AZURE_AI_FUNDAMENTALS}
          isMobile={isMobile}
        />
        <CertificateCard
          title="Azure Data Fundamentals"
          company="Microsoft"
          issued="21/09/2023"
          file={AZURE_DATA_FUNDAMENTALS}
          isMobile={isMobile}
        />
      </div>
      <div>
        <h1 className="text-lg mb-2">Certiport</h1>
        <CertificateCard
          title="Javascript"
          company="Certiport"
          issued="23/05/2024"
          file={JAVASCRIPT}
          isMobile={isMobile}
        />
        <CertificateCard
          title="Databases"
          company="Certiport"
          issued="10/05/2023"
          file={DATABASES}
          isMobile={isMobile}
        />
        <CertificateCard
          title="Python"
          company="Certiport"
          issued="23/05/2022"
          file={PYTHON}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default CertificatesTab;
