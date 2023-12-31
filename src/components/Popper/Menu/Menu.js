import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleSelectLanguage = (item) => {
        let result = onChange(item);
        handleBack();
        history[0].data.find((x) => x.children).title = result;
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    isCheck={history[0].data.find((x) => x.children).title === item.title && item.code}
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            handleSelectLanguage(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-propper')}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className={cx('menu-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
