import moment from 'moment';
import logo from '../../../assets/logo.png';
import Marquee from "react-fast-marquee";
import { Button, Container} from 'react-bootstrap'


const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" className='img-fluid'/>
                <p className="text-secondary">Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.......I can be a React component, multiple React components, or just some text.....
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;