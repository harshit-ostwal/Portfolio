import {
    LucideIcon,
    ListTodo,
    ListFilter,
    ShoppingCart
} from 'lucide-react';

export interface ISectionCardData {
    id: number;
    title: string;
    src: string;
    exp: string;
    snippetCount: number;
    progress: number;
    href?: string;
}

export interface IProjectSectionCardData {
    id: number;
    Icon: LucideIcon;
    title: string;
    bgColor: string;
    techStack: string;
    href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
    {
        id: 1,
        title: 'ToDo List',
        techStack:
            'Next.js 13, Typescript, Tailwind CSS',
        Icon: ListTodo,
        bgColor: '#ff2c55',
        href: 'https://harshit-ostwal-todo.vercel.app',
    },
    {
        id: 2,
        title: 'Ecommerce',
        techStack:
        'NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS',
        Icon: ShoppingCart,
        bgColor: '#e9c46a',
        href: 'https://harshit-ostwal-todo.vercel.app',
    },
    {
        id: 3,
        title: 'Billing Software',
        techStack:
            'C# , Bunifu UI , Microsoft Access DataBase',
        Icon: ListFilter,
        bgColor: '#2a9d8f',
        href: 'https://harshit-ostwal-todo.vercel.app',
    },
];

export const frontendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'HTML',
        src: '/tech/frontend/html.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'CSS',
        src: '/tech/frontend/css.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 3,
        title: 'Bootstrap',
        src: '/tech/frontend/bootstrap.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 4,
        title: 'Reactjs',
        src: '/tech/frontend/React.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 30,
    },
    {
        id: 5,
        title: 'Nextjs 13',
        src: '/tech/frontend/nextjs13.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 30,
    },
    {
        id: 5,
        title: 'JavaScript',
        src: '/tech/frontend/Js.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 30,
    },
    {
        id: 5,
        title: 'Tailwind Css',
        src: '/tech/frontend/tailwind.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 6,
        title: 'Flutter',
        src: '/tech/frontend/Flutter.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 40,
    }
];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'C#',
        src: '/tech/backend/charp.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'C++',
        src: '/tech/backend/C++.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: 'JAVA',
        src: '/tech/backend/Java.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 60,
    },
    {
        id: 4,
        title: 'Python',
        src: '/tech/backend/Python.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 40,
    },
    {
        id: 5,
        title: 'JavaScript',
        src: '/tech/backend/Js.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 40,
    },
    {
        id: 5,
        title: 'Ardunio',
        src: '/tech/backend/arduino.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 40,
    }
];

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'MySQL',
        src: '/tech/database/mysql.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 50,
    },
    {
        id: 2,
        title: 'Access Database',
        src: '/tech/database/MS Access.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
    },
    {
        id: 3,
        title: 'Google FireBase',
        src: '/tech/database/firebase.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    }
];

export const webCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'WordPress',
        src: '/tech/others/wordpress.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
    },
    {
        id: 2,
        title: 'Shopify',
        src: '/tech/others/shpoify.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
    },
    {
        id: 2,
        title: 'Wix',
        src: '/tech/others/wix.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
    }
];