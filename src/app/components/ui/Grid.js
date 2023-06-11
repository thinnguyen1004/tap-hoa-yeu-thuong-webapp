function UiGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 2xl:grid-cols-4 md:gap-6 md:py-5">
      {children}
    </div>
  );
}

export default UiGrid;
