import './footer.css'

const Footer = () => {
    return (
        <footer className="border-2 rounded-md bg-white -mb-7">
            <div className='flex justify-center items-center  '>
                {/* <div className='container footer__center'> */}
                <div className='space-y-10 '>
                    {/* <div className='footer__container'> */}
                    <h1 className='text-center pt-3'>Mohammad Delwar</h1>

                    {/* <ul className="footer__list"> */}
                    <ul className=" flex space-x-10 my-5">
                        <li>
                            <a href="#about" className='footer__link'>About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className='footer__link'>Project</a>
                        </li>

                        <li>
                            <a href="#testimonial" className='footer__link'>Testimonial</a>
                        </li>
                    </ul>

                    {/* <div className="footer__social"> */}
                    <div className="space-x-7 text-center pb-8">
                        <a href="" className="footer__social-link" target="_blank">
                            <i className="bx bxl-facebook"></i>
                        </a>

                        <a href="" className="footer__social-link" target="_blank">
                            <i className="bx bxl-instagram"></i>
                        </a>

                        <a href="" className="footer__social-link" target="_blank">
                            <i className="bx bxl-twitter"></i>
                        </a>

                    </div>

                </div>
            </div>
            <div className='py-4 border-t-2 text-center'>
                <span className='footer_copy'>&#2025; DelwarHosen. All rights reserve </span>
            </div>
        </footer>
    );
};

export default Footer;