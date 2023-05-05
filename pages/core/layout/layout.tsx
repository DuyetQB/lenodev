import Header from "../components/header/header";
const Layout = ({ children }: any) => {
  return (
    <div className="px-8 layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
