import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
export default function Categories() {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox key={category.label} category={category}></CategoryBox>
        ))}
      </div>
    </Container>
  );
}
