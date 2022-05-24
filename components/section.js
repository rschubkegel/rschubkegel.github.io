import Link from "next/link";

const Section = (props) => {

  // add link to header if this goes to another page
  var title;
  if (props.page) {
    title = <h2>{props.title}<span className="viewLink"><Link href={props.page}>view</Link></span></h2>;
  }
  else {
    title = <h2>{props.title}</h2>;
  }

  // return JSX
  return (
    <div id={props.id}>
      { title }
      { props.children }
    </div>
  );
}

export default Section;