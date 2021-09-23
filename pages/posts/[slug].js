import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getAllPosts, getPostData } from '../../helpers/posts-util';

const IndividualPost = props => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticPaths() {
  const allPosts = getAllPosts();

  const paths = allPosts.map(post => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export default IndividualPost;
