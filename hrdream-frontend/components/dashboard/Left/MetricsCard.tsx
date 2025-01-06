
interface MetricsCardProps {
    id:number;
    label: string;
    value: string;
    description: string;
}

export default function MetricsCard({id,label,value,description}:MetricsCardProps) {
    return (
        <div key={id} className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-700">{label}</h3>
            <p className="text-2xl font-bold text-blue-500">{value}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}