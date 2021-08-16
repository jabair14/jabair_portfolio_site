import { Nav } from "react-bootstrap";


function NavBar () {
    return (
        <>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/home"> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about"> About </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact"> Contact </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://jabair.medium.com/"> Blog </Nav.Link>
                </Nav.Item>
            </Nav>
        </>

    )
}

export default NavBar;