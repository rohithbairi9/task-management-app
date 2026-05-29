interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function TaskFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="rounded-2xl border bg-white p-4 shadow-sm outline-none"
    >
      <option value="ALL">
        All Priorities
      </option>

      <option value="LOW">LOW</option>

      <option value="MEDIUM">
        MEDIUM
      </option>

      <option value="HIGH">HIGH</option>
    </select>
  );
}