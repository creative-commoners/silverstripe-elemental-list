<?php

use DNADesign\Elemental\Forms\ElementalAreaConfig;
use DNADesign\Elemental\Models\ElementalArea;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\ORM\FieldType\DBHTMLText;
use Symbiote\GridFieldExtensions\GridFieldAddNewMultiClass;

/**
 * A FormField for editing the elements in an ElementList
 */
class ElementListEditor extends GridField
{
    /**
     * @var ElementalArea $area
     */
    protected $area;

    /**
     * @param string $name
     * @param ElementalArea $area
     * @param string[] $blockTypes
     */
    public function __construct($name, ElementalArea $area)
    {
        $config = new ElementalAreaConfig();

        if (!empty($blockTypes)) {
            /** @var GridFieldAddNewMultiClass $adder */
            $adder = Injector::inst()->create(GridFieldAddNewMultiClass::class);
            $adder->setClasses($blockTypes);
            $config->addComponent($adder);
        }

        // By default, no need for a title on the editor. If there is more than one area then use `setTitle` to describe
        parent::__construct($name, '', $area->Elements(), $config);
        $this->area = $area;

        $this->addExtraClass('element-list-editor__container no-change-track');
    }

    /**
     * Overloaded to skip GridField implementation - this is copied from FormField.
     *
     * @param array $properties
     * @return DBHTMLText|string
     */
    public function FieldHolder($properties = array())
    {
        $context = $this;

        if (count($properties)) {
            $context = $this->customise($properties);
        }

        return $context->renderWith($this->getFieldHolderTemplates());
    }
}
