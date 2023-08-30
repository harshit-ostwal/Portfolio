import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps { }

const ProfilePic: FC<ProfilePicProps> = ({ }) => {
    return (
        <div className="">
            <a href="/">
                <Image
                    alt="Harshit Jain"
                    src="/images/profilePic.png"
                    height={120}
                    width={120}
                    className="object-cover border-4 animate-fade-in-left border-white rounded-full shadow-md"
                />
            </a>
        </div>
    );
};

export default ProfilePic;
