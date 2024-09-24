'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/components/Icon';

import { navigationMobile } from '@/constants/navigation';
import { twMerge } from 'tailwind-merge';

type MenuProps = {};

const Menu = ({}: MenuProps) => {
    const router = useRouter();

    return (
        <div className='fixed left-0 bottom-0 right-0 z-10 hidden justify-between items-center px-3 bg-background border-t border-n-1 md:flex dark:bg-n-2 dark:border-white'>
            {navigationMobile.map((link: any, index: number) =>
                link.url ? (
                    <Link
                        className='flex justify-center items-center w-12 h-18 tap-highlight-color'
                        href={link.url}
                        key={index}
                    >
                        <Icon
                            className={`icon-22 transition-colors dark:fill-white ${
                                router.pathname === link.url && '!fill-blue-1'
                            }`}
                            name={link.icon}
                        />
                    </Link>
                ) : (
                    <button
                        className='flex justify-center items-center w-12 h-18'
                        key={index}
                    >
                        <Icon
                            className={`icon-22 transition-colors dark:fill-white ${
                                router.pathname === link.url ||
                                (router.pathname.startsWith(link.url)
                                    ? '!fill-blue-1'
                                    : '')
                            }`}
                            name={link.icon}
                        />
                    </button>
                )
            )}
        </div>
    );
};

export default Menu;
