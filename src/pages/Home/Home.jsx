import { Link } from 'react-router-dom';

import './_Home.scss';

function Home() {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quidem architecto consequuntur, laborum earum molestias natus reprehenderit? Repellendus, molestias expedita ipsa soluta dolorum neque, iste commodi voluptas laborum culpa ipsam deserunt unde quod, reiciendis necessitatibus dolores porro laudantium ipsum quaerat nobis doloribus debitis dolor sapiente. Ducimus accusamus quae odit ullam modi quis sit. Praesentium ipsa rem inventore consectetur pariatur nisi suscipit saepe. Commodi ducimus consequuntur officia modi illo soluta omnis, voluptate suscipit, assumenda quibusdam, eligendi vel similique sed corrupti incidunt. Maxime dignissimos placeat magnam nesciunt magni et repudiandae, ex praesentium quae tenetur velit commodi officiis, error tempora natus eius perferendis quasi possimus asperiores molestiae? Eaque reiciendis, accusamus suscipit voluptatem voluptatibus iste illum asperiores explicabo distinctio consequatur blanditiis facilis tempore totam dolor libero officiis numquam laborum vitae ex perferendis vel ut! Iure, placeat illum? Cupiditate laudantium harum placeat tenetur? Vel aut odit aspernatur dignissimos itaque aliquam consequatur, quia, et rem laborum quod! Dolorum quisquam iusto magni adipisci minima? Doloribus nemo atque, quas sint iusto perferendis facere! Dicta aliquam tenetur dolorem, a quae officiis unde mollitia, laboriosam et at facere fugiat, obcaecati architecto eligendi eius vel harum voluptatum laudantium doloribus quod! Delectus quaerat suscipit accusamus temporibus consequatur sit, eligendi tenetur repellat pariatur.',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, soluta. aweflkja sfas ef elkfj3lk 2lkasdf.  Ofjo2i3;ifjoasjdf al;23fjla;23j asdflkaslf a32lka2j3lkjfalkjflak23jflka2j3fklj23232',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, soluta. aweflkja sfas ef elkfj3lk 2lkasdf.  Ofjo2i3;ifjoasjdf al;23fjla;23j asdflkaslf a32lka2j3lkjfalkjflak23jflka2j3fklj23232',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, soluta. aweflkja sfas ef elkfj3lk 2lkasdf.  Ofjo2i3;ifjoasjdf al;23fjla;23j asdflkaslf a32lka2j3lkjfalkjflak23jflka2j3fklj23232',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='post' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
