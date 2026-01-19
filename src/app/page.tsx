import TestButton from "@/components/common/TestButton";
import chalk from "chalk-ts";

export default function Home() {
  console.log(chalk.green("Home page loaded"));
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to shopcart application</h1>
      <TestButton />
    </div>
  );
}
