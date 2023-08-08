import Image from "next/image";

const Layout = (props) => {
  return (
    <div>
      <h1>Create</h1>
      {props.children}
      <Image src="/next.svg" alt="next" width="300" height="300" />
    </div>
  );
};

export default Layout;
