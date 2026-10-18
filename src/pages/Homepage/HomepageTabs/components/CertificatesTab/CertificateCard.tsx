import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Download } from "lucide-react";

type CertificateCardType = {
  title: string;
  company: string;
  issued: string;
  isMobile: boolean;
  file?: string;
};

const CertificateCard = ({
  title,
  company,
  issued,
  isMobile,
  file = "",
}: CertificateCardType) => {
  return (
    <div className={clsx(isMobile ? "w-fit" : "w-full", "mx-2 max-w-md")}>
      <Card size="sm" className="w-70">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              {title}
              <a href={file} download>
                <Download className="hover:cursor-pointer hover:text-primary" />
              </a>
            </div>
          </CardTitle>
          <CardDescription>{company}</CardDescription>
          <CardDescription>{issued}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CertificateCard;
