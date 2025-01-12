import React from 'react';
import Layout from '@/components/layouts/Layout';
const Home: React.FC = () => {
    return (
        <Layout>
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mt-10">Welcome to Splash App</h1>
            <p className="text-center text-gray-500 mt-4">
            Your one-stop platform for all your needs. Connecting people, creating opportunities.
            </p>
        </div>
        </Layout>
    );
    }
    export default Home;