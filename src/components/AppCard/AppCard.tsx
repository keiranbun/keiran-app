import { Link } from "react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import NewCardPing from "./components/NewCardPing";
import { useState } from "react";

type AppCardType = {
  title: string;
  description: string;
  link: string;
  newCard?: boolean;
};

const AppCard = ({ title, description, link, newCard }: AppCardType) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseState = (mouseState: boolean) => {
    if (newCard) setIsHovered(mouseState);
  };

  return (
    <div className="w-xs shrink-0">
      <Link
        to={link}
        className="relative block"
        onMouseEnter={() => handleMouseState(true)}
        onMouseLeave={() => handleMouseState(false)}
      >
        <Card
          size="sm"
          className={
            "flex-col flex w-full mx-auto max-w-xs hover:border-primary hover:border"
          }
        >
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle>{title}</CardTitle>
              {newCard ? <NewCardPing isHovered={isHovered} /> : undefined}
            </div>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default AppCard;
