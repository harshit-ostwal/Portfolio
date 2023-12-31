import { FC } from 'react';
import {
    BadgeInfo,
    BookOpen,
    BrainCircuitIcon,
    Contact2,
    FileEdit,
    FileStack,
    Flame,
    Folder,
    FolderEdit,
    Github,
    Home,
    Image as ImageIcon,
    Instagram,
    Layers,
    Linkedin,
    ListFilter,
    ListTodo,
    NewspaperIcon,
    User,
    User2,
    UserCircle2,
    Video,
    VideoIcon,
    Workflow,
    WorkflowIcon,
    X,
    Youtube,
    YoutubeIcon,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';
import { ShoppingCart } from 'lucide-react';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    const { showMenuVisibility } = useMenu();
    return (
        <div
            className="flex relative flex-col h-full animate-fade-in p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
            onClick={() => showMenuVisibility(false)}
        >
            <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                <X className={`text-primary`} />
            </div>
            <div className='animate-fade-in-down'>
            {/* List 1 */}
            <List link="/" effect="slideUp" className='animate-fade-in-left'>
                <Home /> Home
            </List>
            {/* <List link="/bout" effect="slideUp"  className='animate-fade-in-right' >
                <BadgeInfo/> About
            </List>
            <List link='/' effect="slideUp"  className='animate-fade-in-left'>
                <Flame /> Skills
            </List>
            <List link="/" effect="slideUp"  className='animate-fade-in-right'>
                <Workflow/> Work
            </List>
            <List link="/" effect="slideUp"  className='animate-fade-in-left'>
                <Folder/> Projects
            </List>
            <List link="/" effect="slideUp"  className='animate-fade-in-right'>
                <FileEdit/> Blog
            </List>
            <List link="/" effect="slideUp"  className='animate-fade-in-left'>
                <User/> Contact
            </List> */}
            </div>

            {/* List 2 */}
            <div className='animate-fade-in-down'>
            <div className="mt-5">Socials</div>
            <List
                target="_blank"
                link="https://www.instagram.com/harshit_ostwal/"
                effect="slideUp"
                className='animate-fade-in-right'
            >
                <Instagram color="#b5179e" /> Instagram
            </List>
            <List
                target="_blank"
                link="https://github.com/harshit-ostwal"
                effect="slideUp"
                className='animate-fade-in-left'
            >
                <Github color="#2a9d8f" /> Github
            </List>
            <List
                target="_blank"
                link="https://www.youtube.com/@CodeWithHarshit"
                effect="slideUp"
                className='animate-fade-in-right'
            >
                <Youtube color="#e63946" /> Youtube
            </List>
            <List
                target="_blank"
                link="https://stackoverflow.com/users/22074178/harshit-jain"
                effect="slideUp"
                className='animate-fade-in-left'
            >
                <Layers color="#f77f00" /> Stack overflow
            </List>
            <List
                target="_blank"
                link="https://www.linkedin.com/in/harshitostwal/"
                effect="slideUp"
                className='animate-fade-in-right'
            >
                <Linkedin color="#0277b5" /> Linkedin
            </List>
            </div>

            {/* List 3 */}
            <div className='animate-fade-in-down'>
            <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://harshit-ostwal-todo-list.vercel.app"
                effect="slideUp"
                className='animate-fade-in-left'
            >
                <ListTodo color='#b5179e'/> ToDo List
            </List>
            <List
                target="_blank"
                effect="slideUp"
                className='animate-fade-in-right'
            >
                <ShoppingCart color="#2a9d8f"/> Ecommerce
            </List>
            <List
                target="_blank"
                effect="slideUp"
                className='animate-fade-in-left'
            >
                <ListFilter color="#f77f00"/> Billing Software
            </List>
        </div>
        </div>
    );
};

export default Menu;
