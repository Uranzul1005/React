export function Menuitems({ items }) {
  return (
    <div className=" flex text-slate-500 gap-4 items-center">
      <a href="{items[0].link}">{items[0].label}</a>
      <a href="{items[1].link}">{items[1].label}</a>
      <a href="{items[2].link}">{items[2].label}</a>
      <a href="{items[3].link}">{items[3].label}</a>
    </div>
  );
}
