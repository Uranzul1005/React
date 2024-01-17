export function Chip(props) {
  const { label } = props;
  return (
    <div className="inline-block px-4 py-2 bg-gray-200 rounded-xl">{label}</div>
  );
}
