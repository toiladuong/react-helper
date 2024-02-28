import PropTypes from 'prop-types';
import styles from '../component/styles/TiktokLoader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TiktokLoader({ size = '32px', classNames }) {
  return (
    <div className={cx('tiktok-loader')}>
      <div className={cx('loader-container')}>
        <div
          style={{
            width: size,
            height: size,
          }}
          className={cx('loader', classNames)}
        />
      </div>
    </div>
  );
}

TiktokLoader.PropTypes = {
  //Prop to customize the size of loader circle, default is '32px'
  size: PropTypes.string,

  //classNames for loader circle
  classNames: PropTypes.string,
};
export default TiktokLoader;
