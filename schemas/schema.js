import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonStudio from './singletonStudio'
import singletonContact from './singletonContact'

// Documents
import work from './work'

// Common
import seo from './common/seo'
import teamMember from './common/teamMember'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonStudio,
    singletonContact,
    work,
    teamMember,
    seo
  ]),
})
