import ListCard from "./ListCard/ListCard";

export default function Dashboard() {
  return (
      <div className="flex p-5 sm:gap-x-4 gap-y-5 flex-col sm:flex-row flex-wrap">
        <ListCard title={"General"} />
        <ListCard title={"Exercise"} />
        <ListCard title={"Music"} />
      </div>
  )
}
