import { navigateNewTab } from "@/util/navigate";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type ProjectCardType = {
  title: string;
  description: string;
  gitLink: string;
  websiteLink?: string;
  techStack?: string[];
};

const ProjectCard = ({
  title,
  description,
  gitLink,
  websiteLink,
  techStack = [],
}: ProjectCardType) => {
  return (
    <div className="w-xs shrink-0">
      <Card
        size="sm"
        className="flex-col flex w-full mx-auto max-w-xs min-h-55"
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <div className="flex-1" />
        {techStack.length > 0 && (
          <CardContent className="pt-0">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="stack">
                  <AccordionTrigger>Tech Stack</AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-5">
                      {techStack.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        )}
        <CardFooter className="flex justify-center gap-5">
          <Button size="sm" onClick={() => navigateNewTab(gitLink)}>
            Git
          </Button>
          {websiteLink && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigateNewTab(websiteLink)}
            >
              Website
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
