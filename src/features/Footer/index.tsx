import FooterStyled from './styled';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <FooterStyled>
                <div className="footerWrap">
                    <p>&copy; {currentYear} DeepVelop.</p>
                    <p>All rights reserved.</p>
                </div>
            </FooterStyled>
        </>
    );
};

export default Footer;
