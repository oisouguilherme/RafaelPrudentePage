export function PaginationNumbers() {
  return (
    <div className="flex items-center justify-center font-bold text-gray-400 gap-3 pt-16">
      <p className="hover:text-laranja-1 cursor-pointer">{"<"}</p>
      <p className="hover:text-laranja-1 cursor-pointer">1</p>
      <p className="hover:text-laranja-1 cursor-pointer">2</p>
      <p className="hover:text-laranja-1 cursor-pointer">3</p>
      <p className="hover:text-laranja-1 cursor-pointer">4</p>
      <p className="hover:text-laranja-1 cursor-pointer">{">"}</p>
    </div>
  );
}
