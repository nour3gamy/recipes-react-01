import Link from "next/link";
import Icons from "../../components/Icons";
// import { recipesData } from "@/data/recipes";
export default async function recipes() {
  const { recipes } = await fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => data);
  // console.log("recipes", recipes);
  // const { recipes } = recipesData;
  if (!recipes)
    return (
      <div className="flex justify-center items-center text-3xl text-center h-screen">
        Loading...
      </div>
    );
  return (
    <main className="bg-white min-h-screen p-6 text-black">
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="w-70 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between p-4 "
          >
            <div className="h-40 w-full overflow-hidden rounded-lg mb-3">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start gap-2">
                <h2
                  className="font-bold text-base text-gray-800 truncate"
                  title={recipe.name}
                >
                  {recipe.name}
                </h2>
                <div className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
                  ★ <span>{recipe.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-600 mt-2">
                <div className="text-[#DC582A] font-medium">
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Icons name="love" extraCSS="text-lg" />
                  <Icons name="comment" extraCSS="text-lg" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
