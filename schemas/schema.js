import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonStudio from './singletonStudio'
import singletonContact from './singletonContact'
import singletonReel from './singletonReel'
import singletonMenu from './singletonMenu'

// Documents
import work from './work'

// Common
import seo from './common/seo'
import teamMember from './common/teamMember'
import defaultImage from './common/defaultImage'
import modularImageBlock from './common/modularImageBlock'
import textBlock from './common/textBlock'
import imageCarouselBlock from './common/imageCarouselBlock'
import collectionGridBlock from './common/collectionGridBlock'
import modularImageTextBlock from './common/modularImageTextBlock'
import modularDoubleImageBlock from './common/modularDoubleImageBlock'
import modularSideBySideImageBlock from './common/modularSideBySideImageBlock'
import modularVideoBlock from './common/modularVideoBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonStudio,
    singletonContact,
    singletonReel,
    singletonMenu,
    work,
    teamMember,
    defaultImage,
    modularImageBlock,
    modularImageTextBlock,
    modularDoubleImageBlock,
    modularSideBySideImageBlock,
    modularVideoBlock,
    textBlock,
    imageCarouselBlock,
    collectionGridBlock,
    seo
  ]),
})
