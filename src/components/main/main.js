import React from 'react';
import './main.css';

const Main = () => {
	return (
		<div className="main">
			<div className="profile root__section">
				<div className="user-info">
					<div className="user-info__photo"></div>
					<div className="user-info__data">
						<h1 className="user-info__name">Жак-Ив Кусто</h1>
						<p className="user-info__about">Исследователь океана</p>
						<button className="button button_size_small" id="edit">
							Edit
            </button>
					</div>
					<button className="button button_size_large user-info__button" id="add">
						+
          </button>
				</div>
			</div>
			<div className="places-list root__section">



			</div>
			<div className="popup">

			</div>
		</div>

	)
}

export default Main;