import Link from "next/link";

export default function NavBar(props) {
  return (
    <div className="navigator">
      <Link href="/">Home</Link>
      <span style={{margin: "0.25em"}}>&gt;</span>
      <Link href="">{props.page}</Link>
    </div>
  );
}
