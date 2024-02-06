
export const RevenueCard = ({
   title,
   amount,
   orders,
   backgroundColor,
   textColor,
   hoverColor,
   iconColor
}) => {
    return <div className="mr-6"><div className={`rounded-tl-md rounded-tr-md ${backgroundColor} ${textColor} mt-7 pb-9 shadow hover:${hoverColor} `}>
        <div className="flex pl-5 pt-4 text-sm">
            <div className = "">{title}</div>
            <div className="pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill= {iconColor} class="w-4 h-4">
                <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div className = "pl-5 pt-4 flex justify-between">
            <div className="text-xl">Rs. {amount}</div>
            <div className="pr-5 flex">
                <a href = "#!" className="underline">{orders} Orders</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </div>
        </div>
    </div>
    {backgroundColor === 'bg-blue-500' && 
    <div className={`bg-blue-700 flex justify-between rounded-bl-md rounded-br-md text-sm pl-5 pt-3 pb-3 pr-5 ${textColor}`}>
        <div className="">
            Next Payment Date
        </div>
        <div>
            Today, 4:00 PM
        </div>
    </div>}
</div>
}