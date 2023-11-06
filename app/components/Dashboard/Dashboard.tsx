import CategoryCard from "./ListCard/CategoryCard";

export default function Dashboard() {
  return (
      <div className="flex p-5 sm:gap-x-4 gap-y-5 flex-col sm:flex-row flex-wrap">
        <CategoryCard title={"General"} />
      </div>
  )
}
