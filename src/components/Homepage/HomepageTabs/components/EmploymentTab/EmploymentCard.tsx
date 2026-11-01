import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { MoveRight } from "lucide-react";

type EmploymentCardType = {
  employer: string;
  role: string;
  startDate: string;
  description: string[];
  isMobile: boolean;
  endDate?: string;
};
const EmploymentCard = ({
  employer,
  role,
  description,
  startDate,
  endDate,
  isMobile,
}: EmploymentCardType) => {
  return (
    <div className={clsx(isMobile ? "w-fit" : "w-full", "mx-2 max-w-md")}>
      <Card size="sm">
        <CardHeader>
          <CardTitle>{employer}</CardTitle>
          <CardDescription>{role}</CardDescription>
          <CardDescription className="flex gap-2 items-center">
            {startDate} <MoveRight /> {endDate ?? "???"}
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-3">
          <ul>
            {description.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmploymentCard;
