import CarList from "../../components/CarsList/CarsList";
import FilterPanel from "../../components/Filter/FilterPanel";

const Catalog = () => {
  return (
    <div className="container mx-auto px-128">
      <FilterPanel />
      <CarList />
    </div>
  );
};

export default Catalog;
