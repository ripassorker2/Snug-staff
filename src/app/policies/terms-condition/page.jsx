/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TermsConditionPage = () => {
    return (
        <div className="container ">
            <div className="mt-6 text-gray-700">
                <p className=" text-sm">Last updated: Thursday, May 19, 2024</p>
                <>
                    <h2 className="text-2xl mt-4 font-semibold">
                        Guest Cancellation Policy:
                    </h2>
                    <p className="my-3">
                        At Snugstaff, we understand that plans may change, and
                        flexibility is key. Guests have the option to cancel
                        their bookings before moving into the property, subject
                        to the host's specified cancellation policy. The
                        cancellation policies are designed to provide both
                        guests and hosts with a fair framework for managing
                        changes.
                    </p>
                </>
                <>
                    <h2 className="text-2xl mt-4 font-semibold">
                        Cancellation Periods:
                    </h2>
                    <p className="mt-3">
                        •⁠ 7 Days Prior: Full refund will be issued.
                    </p>
                    <p>
                        •⁠ 4 Days Prior: 50% of the booking total will be
                        refunded.
                    </p>
                    <p>
                        4 Days or Less: Unfortunately, no refunds can be
                        processed.
                    </p>
                    <p className="mt-2">
                        It's important for guests to review and be aware of the
                        host's specific cancellation policy for each property
                        they plan to book.
                    </p>
                </>
            </div>
        </div>
    );
};

export default TermsConditionPage;
