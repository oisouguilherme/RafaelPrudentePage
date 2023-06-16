import { CardNews } from "../Utils/CardNews";
import { PaginationNumbers } from "../Utils/PaginationNumbers";

export function Main() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl flex justify-center lg:justify-normal flex-wrap gap-5 px-6">
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <PaginationNumbers/>
    </div>
  );
}
