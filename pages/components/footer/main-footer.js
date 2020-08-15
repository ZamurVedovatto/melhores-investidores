import dynamic from "next/dynamic";
const FooterBottomComponent = dynamic(() => import("./footer-bottom"));

const MainFooter = () => {
  return (
    <footer id="footer-container" className="enable_footer_columns_dark">
      <FooterBottomComponent />
    </footer>
  );
};

export default MainFooter;
