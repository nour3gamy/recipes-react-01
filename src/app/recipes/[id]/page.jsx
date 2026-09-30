import Icons from "@/app/components/Icons";

export default async function recipePage({ params }) {
  const { id } = await params;
  const recipe = await fetch("https://dummyjson.com/recipes/" + id)
    .then((res) => res.json())
    .then((data) => data);
  return (
    <main className="w-full h-screen bg-white">
      <div className="rounded-xl text-black border shadow-lg p-4 m-3 mt-0">
        <div className="flex xs:flex-row flex-col gap-6 bg-white rounded-xl p-6 ">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full md:w-1/2 h-80 object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {recipe.name}
              </h1>
              <div className="text-yellow-500 font-semibold text-lg">
                ★ {recipe.rating} ({recipe.reviewCount} reviews)
              </div>
              <p className="text-[#DC582A] font-medium">
                Cook Time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes}{" "}
                mins
              </p>
              <div className="text-sm text-gray-600">
                <strong>Cuisine:</strong> {recipe.cuisine}
              </div>
            </div>
            <div className="flex justify-between gap-4 items-center ">
              <input
                className="bg-gray-100 p-1 rounded-md ps-2 "
                placeholder="Write a comment..."
              />
              <Icons extraCSS={"size-6"} name="love" />
            </div>
          </div>
        </div>
        <h2>instructions :-</h2>
        <h3>{recipe.instructions}</h3>
      </div>
    </main>
  );
}
