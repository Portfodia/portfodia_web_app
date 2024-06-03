import {useRouter} from 'next/router';
import * as React from 'react';

const IndexPage: React.FC = () => {
    const {push} = useRouter();
    React.useEffect(() => {
        // push('./login');
        push('./homePage');
    }, [push]);

    return <div/>;
};

export default IndexPage;