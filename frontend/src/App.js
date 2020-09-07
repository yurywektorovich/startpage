import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				{/* <div id="time" class="time"></div> */}

				<form method="GET" action="http://www.google.com/search">
					<input name="as_q" className="search-field" autofocus />
					<button
						type="submit"
						className="search-submit"
						value=""
						style={{ fill: "white" }}
					></button>
				</form>

				<div className="box">
					<div className="box-container">
						<div className="heading">Javascript</div>
						<a href="https://reactjs.org" target="_blank">
							<div className="link" tabIndex="1">
								React
							</div>
						</a>
						<a href="https://redux.js.org" target="_blank">
							<div className="link" tabIndex="2">
								Redux
							</div>
						</a>
						<a href="https://roadmap.sh" target="_blank">
							<div className="link" tabIndex="3">
								Roadmaps
							</div>
						</a>
						<a href="https://bulma.io" target="_blank">
							<div className="link" tabIndex="4">
								Bulma
							</div>
						</a>
					</div>
					<div className="box-container">
						<div className="heading">Casual</div>
						<a href="https://keep.google.com/u/0/#home" target="_blank">
							<div className="link" tabIndex="5">
								Google Keep
							</div>
						</a>
						<a href="https://ticktick.com/webapp/#q/all/tasks" target="_blank">
							<div className="link" tabIndex="6">
								TickTick
							</div>
						</a>
						<a
							href="https://www.imdb.com/user/ur54487558/watchlist?ref_=nv_usr_wl_all_0"
							target="_blank"
						>
							<div className="link" tabIndex="7">
								IMDB
							</div>
						</a>
						<a href="https://www.youtube.com" target="_blank">
							<div className="link" tabIndex="8">
								YouTube
							</div>
						</a>
					</div>
					<div className="box-container">
						<div className="heading">Programming</div>
						<a href="https://github.com/" target="_blank">
							<div className="link" tabIndex="9">
								GitHub
							</div>
						</a>
						<a href="www.reddit.com/r/unixporn/top" target="_blank">
							<div className="link" tabIndex="10">
								Reddit
							</div>
						</a>
						<a href="https://medium.com" target="_blank">
							<div className="link" tabIndex="11">
								Medium
							</div>
						</a>
						<a href="https://stackoverflow.com" target="_blank">
							<div className="link" tabIndex="12">
								StackOverflow
							</div>
						</a>
					</div>
					<div className="box-container">
						<div className="heading">Torrents</div>
						<a href="https://www1.thepiratebay3.to" target="_blank">
							<div className="link" tabIndex="13">
								The Pirates Bay
							</div>
						</a>
						<a href="https://www.1337x.to" target="_blank">
							<div className="link" tabIndex="14">
								1337x
							</div>
						</a>
						<a href="https://yts.mx" target="_blank">
							<div className="link" tabIndex="15">
								YTS.MX
							</div>
						</a>
						<a href="https://subscene.com" target="_blank">
							<div className="link" tabIndex="16">
								Subscene
							</div>
						</a>
					</div>
				</div>
			</div>

			<div className="wave-container">
				<div className="wave wave1"></div>
				<div className="wave wave2"></div>
				<div className="wave wave3"></div>
				<div className="wave wave4"></div>
			</div>
		</div>
	);
}

export default App;
