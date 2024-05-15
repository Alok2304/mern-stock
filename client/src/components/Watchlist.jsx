import './WatchList.css';
export default function Watchlist() {

	return (
		<div>
			<div className="outer">
				<h1 className='title'>
					Your WatchList
				</h1>
				<div className="lists">
					<h1 className='stock-symbol'>IBM</h1>
					<p className='stock-symbol'>Open: </p>
					<p className='stock-symbol'>High: </p>
					<h1 className='stock-symbol'>Low: </h1>
					<h1 className='stock-symbol'>Close: </h1>
					<h1 className='stock-symbol'>Volume: </h1>
				</div>
			</div>
		</div>
	);
}
