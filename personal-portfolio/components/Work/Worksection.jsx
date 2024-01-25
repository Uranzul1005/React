import { Chip } from "../Chip";

export function Worksection() {
  return (
    <div className="flex flex-col items-center mt-24 ">
      <Chip label="Work" />
      <p className="mt-4 mb-12 text-slate-500 dark:text-slate-300">
        Some of the noteworthy projects I have built:
      </p>
    </div>
  );
}
