import {fetchCategories} from "../../../mock/fecthCategory";

export default async function MedicationsList() {
    const {data} = await fetchCategories()

    return (
        <section className="w-full py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{'Obtén todo, justo aquí'}</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {data?.map((medication) => (
                    <div key={medication.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{medication.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
