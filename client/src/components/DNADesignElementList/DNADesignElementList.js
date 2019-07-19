import React, { Component } from 'react';
import PropTypes from 'prop-types';

import readBlocksForAreaQuery from '../../queries/readBlocksForElementListQuery';

const ElementComp = () => (
  <div style={{ backgroundColor: 'white' }}
       className="element-editor__element element-editor__element--expandable element-editor__element--draft"
       role="button" tabIndex="0" title="Edit this Content block" draggable="true"
  >
    <div className="element-editor-header">
      <div className="element-editor-header__drag-handle"></div>
      <div className="element-editor-header__info">
        <div className="element-editor-header__icon-container"><i
          className="font-icon-block-content" id="element-icon-6"
        ></i><span
          className="element-editor-header__version-state element-editor-header__version-state--draft"
          title="Item has not been published yet"
        ></span></div>
        <h3 className="element-editor-header__title element-editor-header__title--none"
        >Untitled Content block</h3></div>
      <div className="element-editor-header__actions">
        <div role="none">
          <div id="element-editor-actions-undefined"
               className="action-menu element-editor-header__actions-dropdown dropdown"
          >
            <button type="button" aria-haspopup="true" aria-expanded="false"
                    className="element-editor-header__actions-toggle btn btn-sm btn--no-text font-icon-dot-3 btn btn-secondary"
                    aria-label="View actions"
            ><span className="sr-only">View actions</span></button>
            <div tabIndex="-1" role="menu" aria-hidden="true"
                 className="action-menu__dropdown dropdown-menu dropdown-menu-right"
            >
              <button type="[object Object]" name="Main" title="Content" tabIndex="0"
                      className="dropdown-item dropdown-item"
              >Content
              </button>
              <button type="[object Object]" name="Settings" title="Settings" tabIndex="0"
                      className="dropdown-item dropdown-item"
              >Settings
              </button>
              <div role="separator" tabIndex="-1" className="dropdown-divider"></div>
              <button type="button" title="Save" tabIndex="0"
                      className="element-editor__actions-save dropdown-item"
              >Save
              </button>
              <button type="button" title="Archive" tabIndex="0"
                      className="element-editor__actions-archive dropdown-item"
              >Archive
              </button>
              <button type="button" title="Publish" tabIndex="0"
                      className="element-editor__actions-publish dropdown-item"
              >Publish
              </button>
            </div>
          </div>
        </div>
        <i className="element-editor-header__expand font-icon-down-open-big"
           title="Show editable fields"
        ></i></div>
    </div>
    <div className="element-editor-content">
      <div className="element-editor-summary"><p className="element-editor-summary__content"
      >No preview available</p></div>
    </div>
  </div>
);

/**
 * A custom fieldtype for rendering an ElementalEditor inside an ElementList.
 */
class DNADesignElementList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewExpanded: false,
    };

    console.log();

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick() {
    // this.setState(state => ({ previewExpanded: !state.previewExpanded }));
  }

  render() {
    const {
      blocks,
      loading,
      element,
      type,
      areaId,
      link,
      activeTab,
    } = this.props;

    console.log(blocks);

    const previewExpanded = false;

    const HeaderComponent = this.context.injector.get('ElementHeader');
    const ContentComponent = this.context.injector.get('ElementContent');

    return (
      <div className="element-editor__element element-list">
        <HeaderComponent
          element={element}
          type={type}
          areaId={areaId}
          expandable={type.inlineEditable}
          link={link}
          previewExpanded={previewExpanded}
          handleEditTabsClick={this.handleTabClick}
          activeTab={activeTab}
        />

        <div style={{ margin: '15px 0 -5px' }}>
          <ElementComp />
          <ElementComp />
        </div>
      </div>
    );
  }
}

DNADesignElementList.contextTypes = {
  injector: PropTypes.object,
};

// TODO: Add dependency injection for external components to allow transformations
export default () => (props) => (<DNADesignElementList {...props} />);
