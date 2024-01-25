import { Chip } from "./Chip";
import { Call } from "./icons/Call";
import { Mail } from "./icons/Mail";
import { Copy } from "./icons/Copy";
import { Github } from "./icons/Github";
import { Twitter } from "./icons/Twitter";
import { Figma } from "./icons/Figma";

export function Endsection() {
  return (
    <div className="px-20 py-24 flex flex-col items-center ">
      <Chip label="Get in touch" />
      <p className="mt-4 mb-12 text-slate-500 text-xl max-w-xl dark:text-slate-300">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-5 font-semibold text-lg md:text-4xl">
        <Mail />
        <p>reachsagarshah@gmail.com</p>
        <Copy />
      </div>
      <div className="flex gap-5 font-semibold text-lg md:text-4xl">
        <Call />
        <p>+91 8980500565</p>
        <Copy />
      </div>
      <p className="text-slate-500 mt-12 dark:text-slate-300">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-4">
        <Github />
        <Twitter />
        <Figma />
      </div>
    </div>
  );
}
