import TopNavbar from "@/components/TopNavbar";
export default function recipesLayout({ children }) {
  return (
    <div>
      <TopNavbar />
      {children}
    </div>
  );
}
