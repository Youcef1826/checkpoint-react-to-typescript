
interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}
