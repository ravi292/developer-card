export default function ReviewCard({ title, amount }) {
    return (
        <div className="min-w-[400px] rounded-lg bg-white shadow-md p-5 py-6">
            <div className="mb-3 font-semibold text-grey-700 text-xl flex">{title}</div>
            <div className="flex justify-between">
            <div className="text-lg">Rs. {amount}</div>
            <div className="text-blue-400 underline">{"13 orders >"}</div>
            </div>
        </div>
    )
}
