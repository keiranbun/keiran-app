import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsTab from "./components/SkillsTab/SkillsTab";

const HomepageTabs = () => {
  return (
    <div>
      <Tabs defaultValue="skills" className="w-fit mx-5">
        <TabsList>
          <TabsTrigger value="skills" className="text-base">
            Skills
          </TabsTrigger>
          <TabsTrigger value="employment" className="text-base" disabled>
            Employment (WIP)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <SkillsTab />
        </TabsContent>
        <TabsContent value="employment">WIP</TabsContent>
      </Tabs>
    </div>
  );
};

export default HomepageTabs;
