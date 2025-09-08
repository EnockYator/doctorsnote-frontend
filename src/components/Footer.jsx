

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-900 text-gray-300 text-center w-full">
            <p>&copy; {new Date().getFullYear()} Enock Yator. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-2">
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;
