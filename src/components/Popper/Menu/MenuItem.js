import PropTypes from 'prop-types';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, isCheck = false }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            isActiveRightIcon={isCheck}
            rightIcon={<FontAwesomeIcon icon={faCheck} />}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
