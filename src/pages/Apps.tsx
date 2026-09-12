import AppCard from "@/components/AppCard/AppCard";

const Apps = () => {
  return (
    <h1 className="flex justify-center text-lg">
      <AppCard
        title="The Disc Archive"
        description="My personal movie collection, Boycotting streaming, one disc at a time."
        link="/movies"
        newCard
      />
    </h1>
  );
};

export default Apps;
