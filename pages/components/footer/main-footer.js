import dynamic from "next/dynamic";
// const FooterTopComponent = dynamic(() => import("./footer-top"));
const FooterBottomComponent = dynamic(() => import("./footer-bottom"));

const MainFooter = () => {
  return (
    <footer id="footer-container" className=" enable_footer_columns_dark">
      {/* <FooterTop /> */}
      <FooterBottomComponent />
    </footer>
  );
};

export default MainFooter;
