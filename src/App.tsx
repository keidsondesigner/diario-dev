import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

// import { IPost } from "./core/interfaces/post.interface";

const posts: any[] = [
	{
		id: 1,
		author: {
			hastag: "#SprintSemFim",
			name: "Teste 1",
			occupation: "#SprintSemFim",
			title: "#SprintSemFim",
			content: "#SprintSemFim",
			imgAvatar:
				"https://pbs.twimg.com/profile_images/378800000310437041/ecf60ddabe0ce257fa311bd707d55985_400x400.jpeg",
			alt: "#SprintSemFim",
		},
		published: 1,
	},
	{
		id: 2,
		author: {
			hastag: "#SprintSemFim2",
			name: "Teste 2",
			occupation: "#SprintSemFim",
			title: "#SprintSemFim",
			content:
				"Por onde começar... bom, este cidadão chamado Augustinho Carrara, veio até minha pastelaria, com uma conversar estranha, 'Oh Beiçola descola R$ 100, que te pago o dobro'. nossa fiquei super entusiasmado em fazer esse investiemento, imagina ganhar R$200 assim tão fácil, ingenuidade minha !!!  Hoje faz 6 meses que esse pilantra está me devendo. ",
			imgAvatar:
				"https://www.otempo.com.br/image/contentid/policy:3.1572972:1526753329/image-image-jpg.jpg",
			alt: "#SprintSemFim",
		},
		published: 3,
	},
];

function App() {
	return (
		<>
			<Header title="Diário do Dev" />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						console.log(post);
						return (
							<Post
								key={post.id}
								hastag={post.author.hastag}
								name={post.author.name}
								occupation={post.author.occupation}
								title={post.author.title}
								content={post.author.content}
								imgAvatar={post.author.imgAvatar}
								alt={post.author.alt}
								published={post.published}
							/>
						);
					})}

					{/* <Post
			hastag="#SprintSemFim"
            name="Augustinho Carrara"
			occupation="Front-end"
			title="O Imperador Cryslei e o Lord Fernando, 
			em busca de uma nova liberação para homologação do app
			"
			published={1}
            conten="
				Sprint 18 - dia 289. O app passou pelo pipeline, porém alguns filtros in cloud bararam serviços importantes,
				minha agenda está empanturrada de meet com o pessoal de infra, pela 20° está semana, ninguém consegue identifica o filtro que está barrando
				os serviços, e impedido nosso homologação...
			"
            imgAvatar="https://pbs.twimg.com/profile_images/378800000310437041/ecf60ddabe0ce257fa311bd707d55985_400x400.jpeg"
			alt="texto alt"
          /> */}
					{/* <Post
			hastag="#PastelFritoNaHora"
            name="Beiçola do Pastel"
			occupation="Front-end"
			title="
				Não empreste dinheiro para o Augustinho!!!
			"
            conten="
				Por onde começar... bom, este cidadão chamado Augustinho Carrara, 
				veio até minha pastelaria, com uma conversar estranha, 'Oh Beiçola descola R$ 100, que te pago o dobro'.
				nossa fiquei super entusiasmado em fazer esse investiemento, imagina ganhar R$200 assim tão fácil,
				ingenuidade minha !!!  Hoje faz 6 meses que esse pilantra está me devendo. 
			"
			published={1}
            imgAvatar="https://www.otempo.com.br/image/contentid/policy:3.1572972:1526753329/image-image-jpg.jpg"
			alt="texto alt"
          /> */}
				</main>
			</div>
		</>
	);
}

export default App;
