import React, { useEffect, useRef } from 'react';
import './ReviewSection.css'; // Ensure to create this CSS file

const reviews = [
    {
        name: 'Rahul Sharma',
        review: 'This gym has transformed my fitness journey. The trainers are very supportive!',
        rating: 5,
    },
    {
        name: 'Priya Iyer',
        review: 'I absolutely love the group classes. They make workouts so much fun!',
        rating: 4,
    },
    {
        name: 'Vikram Singh',
        review: 'A great place with fantastic facilities. I feel motivated every time I come here.',
        rating: 5,
    },
    {
        name: 'Anjali Kapoor',
        review: 'The personal training options are excellent. I’ve seen amazing results!',
        rating: 5,
    },
    {
        name: 'Karan Patel',
        review: 'This gym has a wonderful community vibe. Everyone is so encouraging!',
        rating: 4,
    },
];

function ReviewSection() {
    const reviewRef = useRef(null);

    useEffect(() => {
        const scrollReviews = () => {
            if (reviewRef.current) {
                reviewRef.current.scrollLeft += 1;
                if (reviewRef.current.scrollLeft >= reviewRef.current.scrollWidth - reviewRef.current.clientWidth) {
                    reviewRef.current.scrollLeft = 0; // Reset to the beginning
                }
            }
        };
        const interval = setInterval(scrollReviews, 30); // Adjust the speed by changing the interval

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="review-section">
            <h2 style={{ color: "black" }}>What Our Clients Say</h2>
            <div className="review-container" ref={reviewRef}>
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <h4>{review.name}</h4>
                        <p>{review.review}</p>
                        <div className="rating">Rating: {review.rating} ⭐</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewSection;
