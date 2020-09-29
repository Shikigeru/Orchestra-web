import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '../MenuItem/MenuItem';
import '../../styles/Menu.sass';

const MenuList = () => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>
        <MenuItem
          link="/"
          icon={<i className="fa fa-home" aria-hidden="true" />}
          title={t('Menu.main')}
        />
      </li>
      <li>
        <MenuItem
          link="/photos"
          icon={<i className="fa fa-file-image-o" aria-hidden="true" />}
          title={t('Menu.photos')}
        />
      </li>
      <li>
        <MenuItem
          link="/videos"
          icon={<i className="fa fa-video-camera" aria-hidden="true" />}
          title={t('Menu.videos')}
        />
      </li>
      <li>
        <MenuItem
          link="/about"
          icon={<i className="fa fa-info-circle" aria-hidden="true" />}
          title={t('Menu.about')}
        />
      </li>
      <li>
        <MenuItem
          link="/contacts"
          icon={<i className="fa fa-id-card-o" aria-hidden="true" />}
          title={t('Menu.contacts')}
        />
      </li>
    </ul>
  );
};

export default MenuList;
