import { Workchips } from "./Workchips";
import { Reply } from "../icons/Reply";

export function Workleft() {
  return (
    <div className="p-12 flex-1 dark:bg-slate-950 ">
      <p className="mb-6 font-semibold text-xl">Fiskil</p>
      <p className="mb-6 text-slate-500 dark:text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <Workchips />
      <div className="mt-6">
        <Reply />
      </div>
    </div>
  );
}
