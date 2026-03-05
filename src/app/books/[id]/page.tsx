import { useRouter } from "next/router";

export default function BookItem() {
    const router = useRouter();
    const { id } = router.query;

    // In real app we'd fetch details by id; for now just show the id.
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Book detail for ID: {id}</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                    {/* placeholder image */}
                    <div className="bg-gray-200 h-64 w-full" />
                </div>
                <div className="w-full md:w-2/3">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Title: {id && `Sample title ${id}`}</li>
                        <li>Author: Unknown</li>
                        <li>Published Date: TBD</li>
                        <li>Category/Genre: TBD</li>
                        <li>Total Likes: 0</li>
                    </ul>
                    <p className="mt-4">Description would go here...</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                        Like ❤️
                    </button>
                </div>
            </div>
        </div>
    );
}