export default function Footer() {
    return (
        <div className="flex justify-center mt-10 mb-10 items-center">
            <div className="flex justify-center items-center rounded-2xl mb-5 w-96 m-5 md:m-0 md:w-2/4 h-20 bg-cardPrimary">
                <p className="text-primary">All Rights Reserved By Harshit Jain &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};