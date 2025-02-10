// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p
          className={`text-sm mt-2 ${
            trend > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend > 0 ? "+" : ""}
          {trend}% from last month
        </p>
      </div>
      <div className="p-3 bg-blue-50 rounded-full">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  </div>
);
export default StatsCard;
