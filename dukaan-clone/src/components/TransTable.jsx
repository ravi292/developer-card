export const TransTable = ({
    orderId,
    status,
    transId,
    refund_date,
    amount
}
) => {
    return <div>
        <div className="grid grid-cols-12 text-sm ">
            <div className="col-span-3 text-blue-500">
            <a href = "#!" className="underline">#{orderId}</a></div>
            <div className="col-span-2 flex">
            {status === 'Succesful' && (
            <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-1"></div>
            )}
            {status === 'Pending' && (
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-1"></div>
            )}

            {status}</div>
            <div className="col-span-2">{transId}</div>
            <div className="col-span-3">{refund_date}</div>
            <div className="col-span-2">Rs.{amount}</div>
        </div>
        <div className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></div>
    </div>
}