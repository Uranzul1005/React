import { Chip } from "../Chip";

export function Workchips() {
  return (
    <div className="flex flex-wrap gap gap-2">
      <Chip label="React" />
      <Chip label="Next.js" />
      <Chip label="Typescript" />
      <Chip label="Nest.js" />
      <Chip label="PostgreSQL" />
      <Chip label="Tailwindcss" />
      <Chip label="Figma" />
      <Chip label="Cypress" />
      <Chip label="Storybook" />
      <Chip label="Git" />
    </div>
  );
}
