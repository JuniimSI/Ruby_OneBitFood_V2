import {Navbar, Nav} from 'react-bootstrap';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '../SearchBox';
import AddressModal from '../AddressModal';
import { FaCrosshairs } from 'react-icons/fa';

export default function Header() {
    const [addressModalShow, setAddressModalShow] = useState(false);

    return(
        <Navbar bg="white" expand="lg" className="border-bottom border-custom-gray ">
            <Navbar.Brand className="mx-4 mt-1 clickable-effect">
            <Link href="/restaurants">
            <a>
                <Image
                    src="/logo.png"
                    alt="OneBitFood"
                    width={200}
                    height={44}
                />
                </a>
            </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-navz"/>

            <Navbar.Collapse id="responsive-navbar-navz" className="justify-content-end">
              <Nav className="py-2">
                 <span className="clickable-effect" onClick={() => setAddressModalShow(true)}>
                   <FaCrosshairs className='mb-1'/> Endereço
                 </span>
              <AddressModal
                   show={addressModalShow}
                   onHide={() => setAddressModalShow(false)}
                   onShow={() => setAddressModalShow(true)}
               />
             </Nav>
             <SearchBox />
            </Navbar.Collapse>
        </Navbar>
    )
}