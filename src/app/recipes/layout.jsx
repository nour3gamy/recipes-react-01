import TopNavpar from "@/app/components/TopNavpar";
import Route from "../components/Route";
export default function recipesLayout({ children }) {
  return (
    <div>
      <Route />
      <TopNavpar />
      {children}
    </div>
  );
}
