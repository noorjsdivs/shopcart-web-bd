import Container from "@/components/common/Container";
import TestButton from "@/components/common/TestButton";

export default function Home() {
  return (
    <div>
      <Container className="mt-20">
        <h1 className="text-3xl font-bold">Welcome to shopcart application</h1>
        <TestButton />
      </Container>
    </div>
  );
}
