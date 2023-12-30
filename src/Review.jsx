import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
	const [index, setIndex] = useState(0)
	const { name, job, image, text } = people[index]
	// console.log(people.length)
	// console.log(people)

	const checkNumber = number => {
		if (number < 0) {
			return people.length - 1
		}
		if (number > people.length - 1) {
			return 0
		}
		return number
	}

	const prevPerson = () => {
		setIndex(index => {
			const newIndex = index - 1
			return checkNumber(newIndex)
		})
	}
	const nextPerson = () => {
		setIndex(index => {
			const newIndex = index + 1
			return checkNumber(newIndex)
		})
	}

	const randomPerson = () => {
		// min and max included
		let randomNumber = Math.floor(Math.random() * people.length)
		if (randomNumber === index) {
			randomNumber = index + 1
		}
		setIndex(checkNumber(randomNumber))
	}

	return (
		<article className='review'>
			<div className='img-container'>
				<img className='person-img' src={image} alt={name} />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='btn-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button onClick={randomPerson} className='random-btn'>
				Random
			</button>
		</article>
	)
}

export default Review
