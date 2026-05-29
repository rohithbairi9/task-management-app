interface Props {
  priority: "LOW" | "MEDIUM" | "HIGH";
}

export default function PriorityBadge({
  priority,
}: Props) {
  const styles = {
    LOW: "bg-green-100 text-green-700",

    MEDIUM:
      "bg-yellow-100 text-yellow-700",

    HIGH: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}