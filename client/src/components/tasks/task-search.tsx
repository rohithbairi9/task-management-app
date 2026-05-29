interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function TaskSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-2xl border bg-white p-4 shadow-sm outline-none transition-all focus:ring-2 focus:ring-black lg:max-w-sm"
    />
  );
}