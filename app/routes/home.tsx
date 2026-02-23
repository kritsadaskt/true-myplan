import type { Route } from "./+types/home";
import HeroBanner from "~/components/HeroBanner";
import Intro from "~/components/Intro";
import Form from "~/components/Form";
import RecommendedPackage from "~/components/RecommendedPackage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "True My Plan" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <Intro/>
      <Form/>
      <RecommendedPackage/>
    </>
  )
}
