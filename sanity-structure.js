import S from "@sanity/desk-tool/structure-builder";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiMail,
  FiCamera,
  FiUser,
  FiMenu
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Studio').child(S.editor().id('studio').schemaType('studio').documentId('singleton-studio').views(getPreview('studio'))).icon(FiUser),
      S.divider(),
      // S.listItem().title('Work').child(S.documentTypeList('work').title('Work')).icon(FiCamera),
      orderableDocumentListDeskItem({
        type: 'work',
        title: 'Work',
        icon: FiCamera,
        id: 'orderable-work-grid'
      }),
      S.divider(),
      // S.listItem().title('Reel').child(S.editor().id('reel').schemaType('reel').documentId('singleton-reel').views(getPreview('reel'))).icon(FiCamera),
      // S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail),
      S.divider(),
      S.listItem().title('Menu').child(S.editor().id('menu').schemaType('menu').documentId('singleton-menu')).icon(FiMenu),
    ]);