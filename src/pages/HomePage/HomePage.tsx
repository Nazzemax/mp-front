import { Helmet } from 'react-helmet';
import { Test } from './styled';

const HomePage: React.FC = () => {
    return <>
<Helmet>
    <title>Home Page - Main MarketPlace Page</title>
</Helmet>
<Test >
    <h1>Main Page</h1>
</Test>
    </>
}

export default HomePage