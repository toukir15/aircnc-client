export default function CategoryBox({ category }) {
  const { label, icon: Icon } = category;
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer">
      <Icon size={26} />
      <div className="font-medium text-sm"> {label}</div>
    </div>
  );
}
