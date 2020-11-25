/**
 *  BLOCK: Book Details
 *  ---
 *  Add details for a book to a post or page.
 */

// Used to make item ids
import { nanoid } from 'nanoid'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls, MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor
const { Button, PanelBody, PanelRow, ToggleControl } = wp.components
const { Component } = wp.element

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
    },
    haveRead: {
      type: 'boolean',
      selector: 'js-book-details-read'
    },
    quotes: {
      type: 'array',
      selector: 'js-book-details-quotes'
    }
  },

  // The UI for the WordPress editor
  edit: class BookDetails extends Component {
    constructor() {
      super(...arguments)

      // Match current state to saved quotes (if they exist)
      this.state = {
        quotes: this.props.attributes.quotes || []
      }

      this.addQuote = this.addQuote.bind(this)
      this.removeQuote = this.removeQuote.bind(this)
      this.editQuote = this.editQuote.bind(this)
    }

    // adds empty placeholder for quote
    addQuote(e) {
      e.preventDefault()

      // get quotes from state
      const { quotes } = this.state

      // set up empty quote
      const emptyQuote = {
        id: nanoid(),
        content: '',
        pageRef: ''
      }

      // append new emptyQuote object to quotes
      const newQuotes = [...quotes, emptyQuote]

      // save new placeholder to WordPress
      this.props.setAttributes({ quotes: newQuotes })

      // and update state
      return this.setState({ quotes: newQuotes })
    }

    // remove item
    removeQuote(e, index) {
      e.preventDefault()

      // make a true copy of quotes
      // const { quotes } = this.state does not work
      const quotes = JSON.parse(JSON.stringify(this.state.quotes))

      // remove specified item
      quotes.splice(index, 1)

      // save updated quotes and update state (in callback)
      return (
        this.props.setAttributes(
          { quotes: quotes },
          this.setState({ quotes: quotes })
        )
      )
    }

    // handler function to update quote
    editQuote(key, index, value) {
      // make a true copy of quotes
      const quotes = JSON.parse(JSON.stringify(this.state.quotes))
      if (quotes.length === 0) return

      // update value
      quotes[index][key] = value

      // save values in WordPress and update state (in callback)
      return (
        this.props.setAttributes(
          { quotes: quotes },
          this.setState({ quotes: quotes })
        )
      )
    }

    render() {
      // Pull out the props we'll use
      const { attributes, className, setAttributes } = this.props

      // Pull out specific attributes for clarity below
      const { haveRead, image, quotes } = attributes

      return (
        <div className={className}>

          {/* Sidebar Controls */}
          <InspectorControls>
            <PanelBody title={__('Book Status')}>
              <PanelRow>
                <ToggleControl
                  className="js-book-details-read"
                  label="Read"
                  checked={haveRead}
                  help={haveRead ? "This book has been read." : "Currently unread."}
                  onChange={checked => setAttributes({ haveRead: checked })}
                />
              </PanelRow>
            </PanelBody>
          </InspectorControls>

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

          {!!quotes && quotes.map((quote, index) =>
            <div key={quote.id || index} className="wp-admin-book-details-quote">
              <RichText
                className="wp-admin-book-details-quote-content"
                value={quote.content}
                onChange={value => this.editQuote('content', index, value)}
                tagName="div"
                multiline="p"
                placeholder="Quote"
              />

              <RichText
                className="wp-admin-book-details-quote-page-ref"
                value={quote.pageRef}
                onChange={value => this.editQuote('pageRef', index, value)}
                tagName="p"
                placeholder="Page number"
              />

              <p>
                <input
                  className="button-secondary button"
                  type="submit"
                  value="Remove Quote"
                  onClick={(e) => this.removeQuote(e, index)}
                />
              </p>
            </div>
          )}

          <p class="wp-admin-book-details-quote">
            <input
              className="button-primary button"
              type="submit"
              value="Add Quote"
              onClick={(e) => this.addQuote(e)}
            />
          </p>
        </div>
      )
    }
  },

  // No save, dynamic block
  save: props => {
    return null
  }
})
