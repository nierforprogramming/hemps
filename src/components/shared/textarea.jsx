const Textarea = ({ label, placeholder, name, value, onChange }) => (
  <div className="md:col-span-2">
    <label className="block text-xs uppercase tracking-wide text-muted mb-2">
      {label}
    </label>
    <textarea
      rows={5}
      name={name}
      value={value}
      required
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-secondary border border-secondary-dd px-4 py-3 text-sm outline-none focus:border-accent"
    />
  </div>
);

export default Textarea;
