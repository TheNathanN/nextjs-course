import MainNavigation from './main-nav';

const Layout = props => {
  return (
    <>
      <MainNavigation />
      <main> {props.children} </main>
    </>
  );
};

export default Layout;
