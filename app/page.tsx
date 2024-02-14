function TaskkiteShowcase() {
	return <></>
}

const CODEBERG_PAGE = "https://www.codeberg.org/aidanhammond/";
const TASKKITE_PAGE = "https://www.taskkite.ahammond.me";

function Projects() {
	const projects = ["dotfiles", "forum", "sandboxed", "taskkite", "personal-site"];
	return <div>
		<hgroup>
			<h1><a href={CODEBERG_PAGE}>Checkout</a> my other projects,</h1>
			<p>{"but don't forget about "}<a href={TASKKITE_PAGE}>Taskkite!</a></p>
		</hgroup>
		<ul>{projects.map((project) => <li key={project}><a href={CODEBERG_PAGE + project}>{project}</a></li>)}</ul>
	</div>
}

function TechnologiesSlider({ direction }: { direction: number }) {
	return <></>
}

function Technologies() {
	return <div>
		<h1>Technologies I enjoy</h1>
		<TechnologiesSlider direction={1} />
		<TechnologiesSlider direction={-1} />
	</div>
}

function Writings() {
	return <></>
}

function Bookmarks() {
	return <></>
}

function Email({ email }: { email: string }) {
	return <></>
}

function Socials() {
	return <></>
}
export default function Home() {
	return <div>
		<header>
			<div>Aidan Hammond</div>
			<nav>
				<a href="#Projects">Projects</a>
				<a href="#Technologies">Technologies</a>
				<a href="#Writings">Writings</a>
				<a href="#Bookmarks">Bookmarks</a>
			</nav>
			<a href="#Contact">Contact</a>
		</header>
		<div>
			<hgroup>
				<h1>Developing Taskkite,</h1>
				<p>a task management system.</p>
				<a href={TASKKITE_PAGE}>Try it yourself.</a>
			</hgroup>
			<TaskkiteShowcase />
		</div>
		<Projects />
		<Technologies />
		<Writings />
		<Bookmarks />
		<footer>
			<div>
				<h1>Looking for a developer excited by his craft?</h1>
				<p>Shoot me an invite.</p>
				<Email email="aidanhammond2003@gmail.com"></Email>
			</div>
			<Socials />
		</footer>
	</div>
}
