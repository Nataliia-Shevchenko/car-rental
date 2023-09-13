import { useGetCarsListQuery } from "../../redux/carsSlice";

const CarList = () => {
const {data} = useGetCarsListQuery();
console.log(data);

    return (
        <div>LIST</div>
    )
}

export default CarList;