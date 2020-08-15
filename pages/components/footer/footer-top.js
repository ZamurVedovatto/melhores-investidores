import FooterTopLeft from './footer-top-left';
import FooterTopCenter from './footer-top-center';
import FooterTopRight from './footer-top-right';

const FooterTop = () => {
  return (
    <div className="footer-columns">
      <div className="container">
        <div className="row">
          <FooterTopLeft />
          {/* <FooterTopCenter />
          <FooterTopRight /> */}
        </div>
      </div>
    </div>
  )
}

export default FooterTop;