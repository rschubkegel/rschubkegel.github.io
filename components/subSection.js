import Link from "next/link";

const SubSection = (props) => {

  // add link to header if this goes to another page
  var title;
  if (props.page) {
    title = <h3>{props.title}<span className="viewLink"><Link href={props.page}>view</Link></span></h3>;
  }
  else {
    title = <h3>{props.title}</h3>;
  }

  // return JSX
  return (
    <div id={props.id}>
      {title}
      <div className="gridColumn">{props.children}</div>
    </div>
  );
};

export default SubSection;
