import { Link } from 'react-router-dom';

export default function PostDetail() {
	return (
		<>
			<div className="post__detail">
				<div className="post__box">
					<div className="post__title">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quisquam voluptas, necessitatibus
						quasi voluptatibus.
					</div>
					<div className="post__profile-box">
						<div className="post__profile" />
						<div className="post__author-name">패스트캠퍼스</div>
						<div className="post__date">2024.05.13</div>
					</div>
					<div className="post__util-box">
						<div className="post__delete">삭제</div>
						<div className="post__edit">
							<Link to={`/posts/edit/1`}>수정</Link>
						</div>
					</div>
					<div className="post__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quasi praesentium non
						saepe nostrum explicabo debitis rerum quibusdam quia sequi, laborum eligendi amet architecto
						vero doloribus hic aliquam dolores.
					</div>
				</div>
			</div>
		</>
	);
}
