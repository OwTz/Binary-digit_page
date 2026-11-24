import React from 'react';
import { SOCIAL_LINKS, AUTHOR_DISCLAIMER } from '../../models/SocialLinkModel';
import { SocialBoxView } from './SocialBoxView';

export const FooterView: React.FC = () => {
  return (
    <footer className="home-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-author">
          {AUTHOR_DISCLAIMER}
        </div>
        <div className="footer-social-wrapper">
          <SocialBoxView links={SOCIAL_LINKS} />
        </div>
      </div>
    </footer>
  );
};
