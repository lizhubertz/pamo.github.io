import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import SocialNetworks from '../components/SocialNetworks'
import ProfileImage from '../components/ProfileImage'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
          <p>
            <ProfileImage imageSource="/pam-small.jpg" />
            When not crafting an artisinal vimrc, <strong>{config.authorName}</strong> can be found drinking coffee, riding a bike,
            climbing fake rocks, lifting heavy things, and, in general, wandering around San Francisco.</p>
          You can follow her on <SocialNetworks />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
