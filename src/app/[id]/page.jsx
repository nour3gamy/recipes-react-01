export default async function recipePage({ params }) {
  const { id } = await params;
  const recipe = await fetch("https://dummyjson.com/recipes/" + id)
    .then((res) => res.json())
    .then((data) => data);
  return (
    <main className="max-w-4xl mx-auto p-6 text-black">
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl p-6 shadow-lg border">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{recipe.name}</h1>
          <div className="text-yellow-500 font-semibold text-lg">
            ★ {recipe.rating} ({recipe.reviewCount} reviews)
          </div>
          <p className="text-[#DC582A] font-medium">
            Cook Time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
          </p>
          <div className="text-sm text-gray-600">
            <strong>Cuisine:</strong> {recipe.cuisine}
          </div>
        </div>
      </div>
    </main>
  );
}
