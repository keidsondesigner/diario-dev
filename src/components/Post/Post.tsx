// import { IPost } from "../../core/interfaces/post.interface";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post(props: any) {
	//estado  que armazena novos comentários
	const [comments, setComments] = useState([]);

	// estado que armazena o novo texto digitado, do textarea comentáro;
	const [textoNovoComentario, setTextoNovoComentario] = useState("");


	function handleAddNovoComentario(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// copiando meu estado atual de comentários com ...comments, 
		// e crio um novo comentário com o valor do "textoNovoComentario" no estado atual;
		setComments([...comments, textoNovoComentario]);

		//depois de criar um novo comentário, volto ao meu estado inicial;
		setTextoNovoComentario("")
	}

	function handleMudacaNovoComentario(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setTextoNovoComentario(event.target.value);
	}
	return (
		<>
			<article className={styles.post}>
				<header>
					<div className={styles.author}>
						<Avatar
							hasBorder={true}
							src={props.imgAvatar}
							alt={props.alt}
						/>
						<div className={styles.authorInfo}>
							<strong>{props.name}</strong>
							<span>{props.occupation}</span>
						</div>
						<time>Publicada há {props.published}h</time>
					</div>
				</header>

				<div className={styles.content}>
					<small className={styles.hastag}>
						<strong>{props.hastag}</strong>
					</small>
					<h1>
						<strong>{props.title}</strong>
					</h1>
					<p>{props.content}</p>
				</div>

				<form onSubmit={handleAddNovoComentario} className={styles.commentForm}>
					<strong>Deixe seu comentário</strong>
					<textarea
						value={textoNovoComentario}
						onChange={handleMudacaNovoComentario}
						name="inputComment"
						placeholder="Deixe um comentário">
					</textarea>
					<footer>
						<button type="submit">Publicar</button>
					</footer>
				</form>

				<div className={styles.commentLsit}>
					{comments.map(comment => {
						console.log('comment', comment);
						return <Comment key={comment} content={comment} />
					})}
				</div>
			</article>
		</>
	);
}
