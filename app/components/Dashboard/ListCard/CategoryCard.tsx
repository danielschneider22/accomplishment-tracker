import AddNewTask from "./AddNewTask"
import styles from "./CategoryCard.module.css"

interface Props {
    title: string
}

export default async function ListCard({title}: Props) {
  return (
      <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg text-gray-200 sm:w-1/2calc md:w-1/3calc w-screen">
			<div className="flex items-center mb-3">
				<svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
				</svg>
				<h4 className="font-semibold ml-3 text-lg">{title}</h4>
			</div>
            <div className="flex flex-col gap-y-1">
                <div>
                    <input className={`${styles.listItem} hidden`} type="checkbox" id="task_6"/>
                    <label className="flex items-center min-h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_6">
                        <span className="flex items-center justify-center w-5 min-h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">Trim the verge.</span>
                    </label>	
                </div>
            </div>
			<div className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
                <AddNewTask />
                <input className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task" />
            </div>
		</div>
  )
}
