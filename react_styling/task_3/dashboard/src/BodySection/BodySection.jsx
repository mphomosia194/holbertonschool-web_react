function BodySection({ title, children }) {
  return (
    <div className="bodySection px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default BodySection;

