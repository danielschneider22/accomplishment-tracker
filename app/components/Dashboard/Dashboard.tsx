import prisma from "@/prisma/client";
import CategoryCard from "./ListCard/CategoryCard";

export default async function Dashboard() {
    const categories = await prisma.taskCategory.findMany({});

    return (
        <div className="flex p-5 sm:gap-x-4 gap-y-5 flex-col sm:flex-row flex-wrap">
            {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
    )
}
