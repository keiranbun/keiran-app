import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsTab from "./components/SkillsTab/SkillsTab";
import EmploymentTab from "./components/EmploymentTab/EmploymentTab";
import clsx from "clsx";
import CertificatesTab from "./components/CertificatesTab/CertificatesTab";

type HomepageTabsType = {
  isMobile: boolean;
};

const HomepageTabs = ({ isMobile }: HomepageTabsType) => {
  return (
    <div>
      <Tabs
        defaultValue="skills"
        className={clsx(isMobile ? "items-center" : "", "w-fit mx-1 max-w-md")}
      >
        <TabsList>
          <TabsTrigger
            value="skills"
            className={clsx(isMobile ? "text-sm" : "text-base")}
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="employment"
            className={clsx(isMobile ? "text-sm" : "text-base")}
          >
            Employment
          </TabsTrigger>
          <TabsTrigger
            value="certificates"
            className={clsx(isMobile ? "text-sm" : "text-base")}
          >
            Certificates
          </TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <SkillsTab />
        </TabsContent>
        <TabsContent value="employment">
          <EmploymentTab isMobile={isMobile} />
        </TabsContent>
        <TabsContent value="certificates">
          <CertificatesTab isMobile={isMobile} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomepageTabs;
