/** @component sidebar */

import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@momentum-ui/react';
import { UIDFork } from 'react-uid';
import SidebarNavContext from '../SidebarNavContext';

class SidebarNav extends React.PureComponent {
  render() {
    const {
      children,
      className,
      headerNode,
      title,
      ...props
    } = this.props;

    return (
      <UIDFork>
        <SidebarNavContext.Provider value={{ level: 'primary' }}>
          <div
            className={
              `md-sidebar-nav` +
              `${(title && ` md-sidebar-nav--header`) || ''}` +
              `${(className && ` ${className}`) || ''}`
            }>
            {title ? (
              <div className='md-sidebar-nav__header'>{title}</div>
            ) : (
              headerNode
            )}
            <List
              className={
                'md-sidebar-nav__group' +
                ' md-sidebar-nav__group--primary' +
                `${(className && ` ${className}`) || ''}`
              }
              {...props}>
              {children}
            </List>
          </div>
        </SidebarNavContext.Provider>
      </UIDFork>
    );
  }
}

SidebarNav.displayName = 'SidebarNav';

SidebarNav.propTypes = {
  /** @prop Children nodes to render inside SidebarNav | null */
  children: PropTypes.node,
  /** @prop Optional css class string | ''  */
  className: PropTypes.string,
  /** @prop Optional header node to replace header element | ''  */
  headerNode: PropTypes.node,
  /** @prop Optional string to be used for Section Title | ''  */
  title: PropTypes.string
};

SidebarNav.defaultProps = {
  children: null,
  className: '',
  headerNode: null,
  title: ''
};

export default SidebarNav;
