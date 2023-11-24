import Button from '../components/Button';
import { GoBell, GoCloud, GoDatabase, GoBug } from 'react-icons/go';

function ButtonPage() {
    return (
        <div>
       
            <div>
                <Button 
                    danger 
                    outline
                >
                    <GoCloud />
                    Buy now!
                </Button>
            </div> 
            <div>
                <Button 
                    success 
                    rounded 
                    outline
                >
                    <GoBell />
                    Click me!
                </Button>
            </div>       
            <div>
                <Button 
                    warning
                >
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button 
                    primary 
                    rounded
                >
                    Something!
                </Button>
            </div>        
            <div>
                <Button 
                    secondary 
                    outline
                >
                    <GoBug />
                    Hide Ads!
                </Button>
            </div>        
        </div>
    );
}

export default ButtonPage;