export default function BlogStatusBadge ({status } = { status: "published" | "draft"}) {
    const isPublished = status === "published";

    return (
        <span
        className={`px-2 py-1 text-xs rounded-full ${
            isPublished
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            
        }`}
        >
            {isPublished ? "Published" : "Draft"}
        </span>
    );
}