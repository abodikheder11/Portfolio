console.log("Carousel loaded");
export function Carousel({ children }) {
  return <div className="flex space-x-4 overflow-x-auto pb-2">{children}</div>;
}
