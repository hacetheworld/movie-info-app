import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/" style={{ fontSize: '3rem', textAlign: "center", color: 'white' }}>Go to Home </Link>

        </div>;
    }
}
export default NotFoundPage;