import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<div className="post__navigation">
				<div className="post__navigation--active">전체</div>
				<div>나의 글</div>
			</div>
			<div className="post__list">
				{[...Array(10)].map((_, index) => (
					<div key={index} className="post__box">
						<Link to={`/posts/${index}`}>
							<div className="post__profile-box">
								<div className="post__profile" />
								<div className="post__author-name">패스트캠퍼스</div>
								<div className="post__date">2024.05.13</div>
							</div>
							<div className="post__title">게시글 {index}</div>
							<div className="post__text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quasi
								praesentium non saepe nostrum explicabo debitis rerum quibusdam quia sequi, laborum
								eligendi amet architecto vero doloribus hic aliquam dolores.
							</div>
							<div className="post__util-box">
								<div className="post__delete">삭제</div>
								<div className="post__edit">수정</div>
							</div>
						</Link>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}