import {Navbar} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return(
        <Navbar bg="white" expand="lg" className="border-bottom border-custom-gray clickable-effect">
            <Navbar.Brand className="mx-4">
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
        </Navbar>
    )
}