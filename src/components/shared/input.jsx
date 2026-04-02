const Input = ({ label, placeholder, full }) => (
  <div className={full ? "md:col-span-2" : ""}>
    <label className="block text-xs uppercase tracking-wide text-muted mb-2">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-secondary border border-secondary-dd px-4 py-3 text-sm outline-none focus:border-accent"
    />
  </div>
);

export default Input;
