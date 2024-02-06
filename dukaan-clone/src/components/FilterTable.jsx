export const FilterTable = () => {
    return <div className="mt-6 ml-56 mr-6">
        <div className="font-bold">
            Transactions | This Month
        </div>
        <div className="flex justify-start mt-4">
            <button className="mr-3 p-1 bg-gray-200 rounded-xl text-slate-400 hover:bg-gray-300">
                Payouts (22)
            </button>
            <button className="rounded-xl bg-blue-700 p-1 hover:bg-blue-900">
                Refunds (6)
            </button>
        </div>
        <div className="mt-5 flex">
            <div className="w-60">
            <form>
                <label htmlFor="default-search" className="mb-2 w-10 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 mr-2 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="pr-2 w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full pb-2 pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="         Order ID or Transactions ID" required />
                </div>
            </form>
            </div>
            <div className="ml-auto flex">
                <button className="mr-3 border-2 border-gray w-20 h-8 flex justify-between pt-0.5 pl-2 text-gray-400 hover:bg-gray-300">
                    Sort
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

                </button>
                <button className="border-gray border-2 w-6 h-8 text-gray-400 hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 pl-1">
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>


                </button>
            </div>
        </div>

        <div className='mt-4 bg-gray-200 p-1 rounded text-sm grid grid-cols-12'>
            <div className="col-span-3">Order ID</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Transaction ID</div>
            <div className="col-span-3">Refund Date</div>
            <div className="col-span-2">Order Amount</div>
        </div>
    </div>
}