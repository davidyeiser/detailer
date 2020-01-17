/**
 *  BLOCK: Book Details
 *  ---
 *  Add details for a book to a post or page.
 */

//  Import CSS.
import './editor.css'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor
const { Button } = wp.components

registerBlockType('davidyeiser-detailer/book-details', {
  title: __( 'Book Details' ),
  icon: 'format-aside',
  category: 'common',
  keywords: [
    __( 'book' ),
    __( 'details' ),
  ],

  // Enable or disable support for low-level features
  supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },

  // Set up data model for custom block
  attributes: {
    image: {
      type: 'object',
      selector: 'js-book-details-image'
    },
    title: {
      type: 'string',
      selector: 'js-book-details-title'
    },
    author: {
      type: 'string',
      selector: 'js-book-details-author'
    },
    summary: {
      type: 'string',
      selector: 'js-book-details-summary',
      multiline: 'p'
    }
  },

  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props

    // Pull out specific attributes for clarity below
    const { image } = attributes

    return (
      <div className={className}>
        <MediaUploadCheck>
          <MediaUpload
            className="js-book-details-image wp-admin-book-details-image"
            allowedTypes={['image']}
            multiple={false}
            value={image ? image.id : ''}
            onSelect={image => setAttributes({ image: image })}
            render={({ open }) => (
              image ?
                <div>
                  <p>
                    <img src={image.url} width={image.width / 2} />
                  </p>

                  <p>
                    <Button onClick={() => setAttributes({ image: '' })} className="button is-small">Remove</Button>
                  </p>
                </div> :
                <Button onClick={open} className="button">Upload Image</Button>
            )}
          />
        </MediaUploadCheck>

        <RichText
          className="js-book-details-title wp-admin-book-details-title"
          value={attributes.title}
          onChange={value => setAttributes({ title: value })}
          tagName="h3"
          placeholder="Book title"
        />

        <RichText
          className="js-book-details-author wp-admin-book-details-author"
          value={attributes.author}
          onChange={value => setAttributes({ author: value })}
          tagName="span"
          placeholder="Book author"
        />

        <RichText
          className="js-book-details-summary wp-admin-book-details-summary"
          value={attributes.summary}
          onChange={value => setAttributes({ summary: value })}
          tagName="div"
          placeholder="Book summary"
          multiline="p"
        />
      </div>
    )
  },

  // No save, dynamic block
  save: props => {
    return null
  }
})
