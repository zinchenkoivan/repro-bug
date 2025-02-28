import type { Route } from "./+types/home";
import { ExternalDocs } from "@storybook/blocks"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <ExternalDocs projectAnnotationsList={[]}>
      test
    </ExternalDocs>
  </div>;
}
