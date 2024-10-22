import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from 'antd';
import ContactForm from "@/components/Contact/ContactForm"; // Ant Design Modal

const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
    const [mobileSubMenu, setMobileSubMenu] = useState('');
    const [mobileSubMenuSub, setMobileSubMenuSub] = useState('');
    const [menuTitle, setMenuTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
    const [isSmallScreen, setIsSmallScreen] = useState(false); // For small screen detection

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'unset'; // Enable scrolling
        }
    }, [isModalOpen]);

    // Handle menu close
    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
        setMobileSubMenuSub('');
    };

    // Handle submenu click
    const handleSubMenu = (e, id) => {
        e.preventDefault();
        setMobileSubMenu(id);
        const content = e.target.tagName === 'A' ? e.target.firstChild.textContent : e.target.parentElement.textContent;
        setMenuTitle(content);
    };

    // Handle nested submenu
    const handleSubMenuSub = (e, id) => {
        e.preventDefault();
        setMobileSubMenuSub(id);
        const content = e.target.tagName === 'A' ? e.target.firstChild.textContent : e.target.parentElement.textContent;
        setMenuTitle(content);
    };

    // Go back to previous menu
    const handleGoBack = () => {
        if (mobileSubMenuSub) {
            setMobileSubMenuSub('');
            return;
        }
        if (mobileSubMenu) {
            setMobileSubMenu('');
            return;
        }
    };

    // Show modal for "Get a Quote"
    const showModal = () => {
        setIsModalOpen(true);
    };

    // Close modal
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Check for small screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) { // Assuming 640px as small screen breakpoint
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Check on resize
        return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);

    return (
        <div className='menu-block-wrapper text-white'>
            <div onClick={handleMenu} className={`menu-overlay ${mobileMenu && 'active'}`} />
            <nav className={`menu-block ${mobileMenu && 'active'}`} id='append-menu-header'>
                <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                    <div onClick={handleGoBack} className='go-back'>
                        <Image
                            className='dropdown-icon'
                            src='/assets/img_placeholder/icon-black-long-arrow-right.svg'
                            alt='cheveron-right'
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className='current-menu-title'>{menuTitle}</div>
                    <div onClick={handleMenu} className='mobile-menu-close'>×</div>
                </div>
                <ul className={`site-menu-main ${color} font-bold`}>
                    <li onClick={(e) => handleSubMenu(e, 1)} className='nav-item nav-item-has-children'>
                        <Link href='/' className='nav-link-item drop-trigger text-lg'>Home</Link>
                    </li>
                    <li onClick={(e) => handleSubMenu(e, 2)} className='nav-item nav-item-has-children'>
                        <Link href='/about' className='nav-link-item drop-trigger text-lg'>About</Link>
                    </li>

                    <li onClick={(e) => handleSubMenu(e, 3)} className='nav-item nav-item-has-children'>
                        <Link href='/services' className='nav-link-item drop-trigger text-lg'>
                            Services
                            <Image
                                className='dropdown-icon'
                                src='/assets/img_placeholder/icon-black-cheveron-right.svg'
                                alt='cheveron-right'
                                width={16}
                                height={16}
                            />
                        </Link>
                        <ul className={`sub-menu ${mobileSubMenu === 3 && 'active'} space-y-1 w-80`}>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='webdevelopment' className=''>Web Development</Link>
                            </li>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='appdevelopment' className=''>App Development</Link>
                            </li>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='/services/seo' className=''>SEO</Link>
                            </li>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='/services/video-editing' className=''>Video Editing</Link>
                            </li>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='/services/graphic-design' className=''>Graphic Designing</Link>
                            </li>
                            <li className='sub-menu--item border-b border-black-100 pb-2'>
                                <Link href='/services/ui-ux' className=''>UI/UX</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <Link href='/portfolio' className='nav-link-item text-lg'>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/contact' className='nav-link-item text-lg'>Contact</Link>
                    </li>

                    <div className="mt-3 mx-8">
                        <Link
                            href="#"
                            onClick={showModal}
                            className={`button rounded-[50px] border-2 py-4 ${isModalOpen ? 'text-black' : 'text-black'
                                } ${mobileMenu || isSmallScreen ? 'bg-white text-black border-black' : 'bg-transparent text-white border-transparent'
                                } after:bg-customGreen border-white hover:border-customGreen hover:text-white`}
                        >
                            Get a Quote
                        </Link>

                    </div>
                </ul>
            </nav>

            {/* Modal for "Get a Quote" with ContactForm */}
            <Modal
                open={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
                width={800}
                bodyStyle={{ overflowY: 'hidden' }}  // Prevent internal scroll
                centered
            >
                <div style={{ maxHeight: '95vh', overflowY: 'auto' }}>  {/* Ensure modal content fits */}
                    <ContactForm/>
                </div>
            </Modal>
        </div>
    );
};

export default Navbar;
