const Select = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-xs uppercase tracking-wide text-muted mb-2">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-secondary border border-secondary-dd px-4 py-3 text-sm outline-none focus:border-accent"
    >
      <option value="">Select inquiry type…</option>
      <option>Wholesale Order</option>
      <option>Sample Kit Request</option>
      <option>Wholesale Quote</option>
      <option>Partnership / NGO</option>
      <option>Press & Media</option>
      <option>Other</option>
    </select>
  </div>
);

export default Select;
