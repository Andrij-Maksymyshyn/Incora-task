import { Outlet } from 'react-router-dom';
import { Header, Nav, LinkStyled } from './Layout.styled';


export default function Layout() {
    return (
        <>
        <Header>
            <Nav>
                <LinkStyled to="/">Home</LinkStyled>
                <LinkStyled to="/movies">Movies</LinkStyled>
            </Nav>
        </Header>
        <Outlet/>           
            </>
    )
};