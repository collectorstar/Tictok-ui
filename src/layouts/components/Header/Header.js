import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'spa',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    code: 'chi',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'deu',
                    title: 'German',
                },
                {
                    type: 'language',
                    code: 'ita',
                    title: 'Italian',
                },
                {
                    type: 'language',
                    code: 'jpn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'por',
                    title: 'Portuguese',
                },
                {
                    type: 'language',
                    code: 'rus',
                    title: 'Russian',
                },
                {
                    type: 'language',
                    code: 'ara',
                    title: 'Arabic',
                },
                {
                    type: 'language',
                    code: 'hin',
                    title: 'Hindi',
                },
                {
                    type: 'language',
                    code: 'tha',
                    title: 'Thai',
                },
                {
                    type: 'language',
                    code: 'ind',
                    title: 'Indonesian',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': {
                console.log(menuItem.title);
                break;
            }
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TicTok" />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} trigger="click" content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} trigger="click" content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} trigger="click" content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src="" alt="vu duc duy" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
