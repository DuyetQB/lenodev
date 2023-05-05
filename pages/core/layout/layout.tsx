import dynamic from "next/dynamic";
// import Header from "../components/header/header";
const DynamicHeader= dynamic(() => import('../components/header/header'), {
  loading: () => <p>Loading...</p>,
  });
  
const Layout = ({ children }: any) => {
  return (
    <div className="px-8 layout">
      <DynamicHeader />
      {children}
    </div>
  );
};

export default Layout;
