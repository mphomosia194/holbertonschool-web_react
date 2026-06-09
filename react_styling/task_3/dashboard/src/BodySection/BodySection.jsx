function BodySection({ title, children }) {
  return (
    <div className="bodySection p-6">
      <h2 className="text-[24px] font-bold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default BodySection;

