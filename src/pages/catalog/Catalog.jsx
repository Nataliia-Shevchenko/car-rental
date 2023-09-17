import CarList from "../../components/CarsList/CarsList";
import FilterPanel from "../../components/Filter/FilterPanel";

const Catalog = () => {
  return (
    <div className="container mx-auto">
      <FilterPanel />
      <CarList />
    </div>
  );
};

export default Catalog;
