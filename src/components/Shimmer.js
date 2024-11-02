const Shimmer = ({ cardCount = 20 }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: cardCount }).map((_, index) => (
        <div
          key={index}
          className="w-40 h-60 bg-gray-200 animate-pulse rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
