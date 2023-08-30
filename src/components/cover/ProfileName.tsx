import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl sm:text-3xl animate-fade-in-right md:text-3xl flex flex-col font-bold text-highlight">
            Harshit Jain
            <div className="text-sm sm:text-md md:text-md font-thin flex justify-between items-center">
                @harshit_ostwal
                <Link
                    className="block md:hidden"
                    href="https://instagram.com/harshit_ostwal"
                    target='_blank'
                >
                    <Button variant="primary" className='ms-5' sizes={'iconOnly'}>
                        <Instagram />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
