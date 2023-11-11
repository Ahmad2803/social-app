import Post from '../post/Post';
import './posts.scss'

const Posts = () => {

    //TEMPORARY
    const posts = [
      {
        id: 1,
        name: "Sam Doe",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "Sam Doe",
        userId: 2,
        profilePic:
          "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      },
    ];



    return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};
export default Posts
