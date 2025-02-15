const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {Array(12).fill(0).map((_, index) => (
        <div
          key={index}
          className="h-40 bg-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
