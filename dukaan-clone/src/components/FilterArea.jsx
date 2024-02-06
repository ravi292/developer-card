export const FilterArea = () => {
    return <div className="ml-56">
        <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 hover:bg-gray-300">
        </div>
        <div className="flex justify-between">
            <div className="text-2xl font-bold">Overview</div>
            <div className="flex text-sm justify-between box-border h-9 w-32 border-2 mt-5 border-gray mr-7">
                <div className="pl-3 pt-1.5 ">This Month</div>
                <div className="pt-1.5 pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5 hover:bg-gray-300 hover:cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                </div>
            </div>
        </div>
    </div>
}