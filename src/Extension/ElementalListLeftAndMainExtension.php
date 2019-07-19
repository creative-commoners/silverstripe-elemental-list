<?php

namespace DNADesign\ElementalList\Extension;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class ElementalListLeftAndMainExtension extends Extension
{
    public function init()
    {
        Requirements::add_i18n_javascript('dnadesign/silverstripe-elemental-list:client/lang');
    }
}
