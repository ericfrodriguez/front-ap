
export const Card = ({title, description, date}) => {
    return (
        <article
            className="relative overflow-hidden rounded-lg shadow transition max-w-[500px] hover:shadow-lg my-4"
        >
            <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
                <div className="p-4 sm:p-6">
                    <time className="block text-xs text-white/90">
                        {date}
                    </time>

                    <h3 className="mt-0.5 text-lg text-white">
                        {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}
