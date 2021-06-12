import {Navbar} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '../SearchBox';

export default function Header() {
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
               <SearchBox />
             </Navbar.Collapse>
        </Navbar>
    )
}