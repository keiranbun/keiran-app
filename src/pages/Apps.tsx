import AppCard from "@/components/AppCard/AppCard";

const Apps = () => {
  return (
    <h1 className="flex justify-center text-lg">
      <AppCard
        title="The Disc Archive"
        description="A collection of my personal movies."
        link="/movies"
        newCard
      />
    </h1>
  );
};

export default Apps;
