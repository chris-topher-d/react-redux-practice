import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  // When a new prop is received
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className='post'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div className='posts'>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state =>({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
