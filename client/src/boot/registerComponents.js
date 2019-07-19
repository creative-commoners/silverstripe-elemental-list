import Injector from 'lib/Injector';

import DNADesignElementList from 'components/DNADesignElementList/DNADesignElementList';
import ElementListEditor from 'components/ElementListEditor/ElementListEditor';

export default () => {
  console.log('yo');
  Injector.component.registerMany({
    DNADesignElementList,
    ElementListEditor,
  });

  Injector.transform(
    'element-list-editor',
    (updater) => {
      updater.component('Element.DNADesignElementList', DNADesignElementList);
    }
  );
};
