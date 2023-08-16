import { Nav, Container, Navbar, Button, Image } from "react-bootstrap";
import { useState } from "react";
import shoes from "../../data";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import "./Navbar.css";

const allCategories = [...new Set(shoes.map(shoes => shoes.category))]





export default function NavBar() {
    console.log(allCategories)
    const [allShoes, setAllShoes] = useState(shoes)
    const [categories, setCategories] = useState(allCategories)


    return (
        <Navbar expand="lg" className="bg-transparent">
            <Container fluid>
                <Navbar.Brand href="#home" className="" style={{ width: "5rem" }}>
                    <Image src="/Img/Nike.png" className="w-100" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        <Nav.Link href="Home">
                            <Link to='/' className="text-decoration-none text-white">
                                HOME
                            </Link>

                        </Nav.Link>
                        {categories.map((category) => (

                            <Nav.Link href="#link" className="text-white">{category}</Nav.Link>
                        ))}

                    </Nav>
                    <div className="d-flex ">
                        <Button className="bg-light d-flex justify-content-center align-items-center  rounded-circle  p-2 border-0 me-2 text-" >
                            <BiShoppingBag className=" fs-4 text-transparent" />
                        </Button>
                        <Button className="bg-light  d-flex justify-content-center align-items-center rounded-circle p-2 border-0">
                            <AiOutlineUser className="text-transparent fs-4 " />
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
