import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

export default class PaginationDynamic extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){
		let datas = this.props.data;

		(function() {

			function Pagination() {

				const objJson = datas;

				const firstButton = document.getElementById('button_first');
				const prevButton = document.getElementById('button_prev');
				const nextButton = document.getElementById('button_next');
				const lastButton = document.getElementById('button_last');

				let current_page = 1;
				let records_per_page = 5;

				this.init = function() {
					changePage(1);
					selectedPage();
					clickPage();
					addEventListeners();
				}

				firstButton.style.display = "none";
				prevButton.style.display = "none";

					let addEventListeners = function() {
						firstButton.addEventListener('click', firstPage);
						prevButton.addEventListener('click', prevPage);
						nextButton.addEventListener('click', nextPage);
						lastButton.addEventListener('click', lastPage); 
					}

					let selectedPage = function() {
						let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
						for (let i = 0; i < page_number.length; i++) {
							if (i === current_page - 1) {
								page_number[i].style.display = "block";
							} 
							else {
								page_number[i].style.display = "none";
							}
						} 
					} 

					let checkButtonOpacity = function() {
						current_page === 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
						current_page === numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
					}

					let changePage = function(page) {
						const listingTable = document.getElementById('listingTable');

						if (page < 1) {
							page = 1;
						} 
						if (page > (numPages() -1)) {
							page = numPages();
						}

						listingTable.innerHTML = "";

						for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
							listingTable.innerHTML += "<div class='element--content'>" + objJson[i].content + "</div>";
						}
						checkButtonOpacity();
						selectedPage();
					}

					let firstPage = function() {
						firstButton.style.display = "none";
						prevButton.style.display = "none";
						lastButton.style.display = "inline-block";
						nextButton.style.display = "inline-block";
						changePage(1);
					}

					let prevPage = function() {
						if(current_page > 1) {
							current_page--;
							changePage(current_page);
							firstButton.style.display = "inline-block";
							prevButton.style.display = "inline-block";
							lastButton.style.display = "inline-block";
							nextButton.style.display = "inline-block";
						}
						if(current_page === 1) {
							firstButton.style.display = "none";
							prevButton.style.display = "none";
							lastButton.style.display = "inline-block";
							nextButton.style.display = "inline-block";
						}
					}

					let nextPage = function() {
						if(current_page < numPages()) {
							current_page++;
							changePage(current_page);
							firstButton.style.display = "inline-block";
							prevButton.style.display = "inline-block";
							lastButton.style.display = "inline-block";
							nextButton.style.display = "inline-block";
						}
						if(current_page === numPages()){
							firstButton.style.display = "inline-block";
							prevButton.style.display = "inline-block";
							lastButton.style.display = "none";
							nextButton.style.display = "none";
						}
					}

					let lastPage = function() {
						firstButton.style.display = "inline-block";
						prevButton.style.display = "inline-block";
						lastButton.style.display = "none";
						nextButton.style.display = "none";
						changePage(numPages());
					}

					let clickPage = function() {
						document.addEventListener('click', function(e) {
							if(e.target.nodeName === "SPAN" && e.target.classList.contains("clickPageNumber")) {
								current_page = e.target.textContent;
								changePage(current_page);
							}
						});
					}

					let numPages = function() {
						return Math.ceil(objJson.length / records_per_page); 
					}
			}
			let pagination = new Pagination();
			pagination.init();
		})();
	}

	render() {
		return (
			<div class="pagination">
				<div class="tableList" id="listingTable"></div>
				<div class="pagination-block">
					<span class="pageButton outline-none" id="button_first">First</span>
					<span class="pageButton outline-none" id="button_prev">Prev</span>
					<span id="page_number" class="outline-none"></span>
					<span class="pageButton outline-none" id="button_next">Next</span>
					<span class="pageButton outline-none" id="button_last">Last</span>
				</div>
			</div>
		);
	}
}

PaginationDynamic.propTypes = {
	data: PropTypes.any.isRequired
}
