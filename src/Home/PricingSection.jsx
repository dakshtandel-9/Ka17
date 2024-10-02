import React from 'react';
import './PricingSection.css'; // Ensure this CSS file is correctly linked

function PricingSection() {
    return (
        <div className="pricing-section">
            <h2>Pricing Plans</h2>
            <div className="pricing-container">

                <div className="pricing-card">
                    <h3>Universal Package</h3>
                    <h4>1 Month: <span className="price">₹1,399</span> <span className="actual">(Actual: ₹1,799)</span></h4>
                    <h4>3 Months: <span className="price">₹2,999</span> <span className="actual">(Actual: ₹4,199)</span></h4>
                    <h4>6 Months: <span className="price">₹4,899</span> <span className="actual">(Actual: ₹6,899)</span></h4>
                    <h4>1 Year: <span className="price">₹7,999</span> <span className="actual">(Actual: ₹16,799)</span></h4>
                </div>

                <div className="pricing-card">
                    <h3>Couple Package</h3>
                    <h4>1 Month: <span className="price">₹2,499</span> <span className="actual">(Actual: ₹3,599)</span></h4>
                    <h4>3 Months: <span className="price">₹5,299</span> <span className="actual">(Actual: ₹7,999)</span></h4>
                    <h4>6 Months: <span className="price">₹7,889</span> <span className="actual">(Actual: ₹9,899)</span></h4>
                    <h4>1 Year: <span className="price">₹13,999</span> <span className="actual">(Actual: ₹22,999)</span></h4>
                </div>

                <div className="pricing-card">
                    <h3>Student Package</h3>
                    <h4>3 Months: <span className="price">₹2,699</span> <span className="actual">(Actual: ₹3,599)</span></h4>
                    <h4>6 Months: <span className="price">₹4,449</span> <span className="actual">(Actual: ₹6,299)</span></h4>
                    <h4>1 Year: <span className="price">₹6,999</span> <span className="actual">(Actual: ₹14,399)</span></h4>
                </div>

                <div className="pricing-card">
                    <h3>Personal Training</h3>
                    <h4>1 Month: <span className="price">₹8,999</span></h4>
                    <h4>2 Months: <span className="price">₹15,999</span></h4>
                </div>

                <div className="pricing-card">
                    <h3>Gym + Zumba</h3>
                    <h4>3 Months: <span className="price">₹4,999</span></h4>
                    <h4>1 Year: <span className="price">₹14,999</span></h4>
                </div>

            </div>
        </div>
    );
}

export default PricingSection;
