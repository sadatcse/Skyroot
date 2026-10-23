import React from 'react';
import { PolicyLayout } from '../../components/PolicyLayout';

const sections = [
    {
        id: 'scope',
        title: 'Scope',
        body: [
            'This policy applies to booking money, down payments and installments paid to Skyroot Real Estate Ltd for apartments, commercial spaces and other properties. The specific terms in your signed allotment letter or sale agreement will prevail over this general policy.',
        ],
    },
    {
        id: 'cancellation-by-customer',
        title: 'Cancellation by the Customer',
        body: [
            'If you wish to cancel a booking or allotment, you must submit a written cancellation request to our office along with the original money receipts and allotment documents.',
            {
                list: [
                    'Cancellation before signing the sale agreement: the booking money will be refunded after deducting a service charge as stated in the booking form.',
                    'Cancellation after signing the sale agreement: the amount paid will be refunded after deducting the charges set out in the agreement, which may include administrative costs, documentation costs and any discounts received.',
                    'Once the property has been registered in the buyer\'s name, the purchase cannot be cancelled or refunded.',
                ],
            },
        ],
    },
    {
        id: 'cancellation-by-company',
        title: 'Cancellation by the Company',
        body: [
            'Skyroot Real Estate Ltd may cancel an allotment if the customer repeatedly fails to pay installments on time as per the payment schedule, after giving written notice. In such cases the amount paid will be refunded after deducting the charges stated in the sale agreement.',
            'If we are unable to deliver the property due to reasons solely attributable to us, the full amount paid will be refunded.',
        ],
    },
    {
        id: 'refund-process',
        title: 'Refund Process and Timeline',
        body: [
            {
                list: [
                    'Refunds are processed after the cancellation request is approved and all original documents are returned.',
                    'Refunds are normally paid within the time stated in the sale agreement, or after the cancelled unit is re-sold, whichever is specified.',
                    'Payment is made by account payee cheque or bank transfer in the name of the original applicant only.',
                    'No interest is payable on refunded amounts unless the agreement says otherwise.',
                ],
            },
        ],
    },
    {
        id: 'non-refundable',
        title: 'Non-Refundable Charges',
        body: [
            'The following are generally not refundable:',
            {
                list: [
                    'Government fees, stamp duty, registration and mutation costs already paid on your behalf.',
                    'Charges for additional work or customisation requested by you and already carried out.',
                    'Utility connection fees paid to service providers.',
                    'Late payment charges.',
                ],
            },
        ],
    },
    {
        id: 'consultancy-services',
        title: 'Consultancy Services',
        body: [
            'For architecture, engineering, interior design and other consultancy services, fees are refundable only as set out in the service agreement. Fees for work stages that have already been completed or delivered are not refundable.',
        ],
    },
    {
        id: 'transfer',
        title: 'Transfer Instead of Refund',
        body: [
            'With the company\'s approval, a customer may transfer the allotment to another person, or change to a different unit or project, instead of cancelling. Transfer fees and conditions apply as per company policy.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes to This Policy',
        body: [
            'We may update this Refund Policy from time to time. Changes will not affect agreements that have already been signed.',
        ],
    },
];

const RefundPolicy = () => {
    return (
        <PolicyLayout
            title="Refund Policy"
            description="Cancellation and refund terms for bookings, installments and services with Skyroot Real Estate Ltd."
            intro="We want every customer to buy with confidence. This policy explains how cancellations and refunds work for property bookings, installments and consultancy services with Skyroot Real Estate Ltd."
            lastUpdated="October 23, 2026"
            sections={sections}
        />
    );
};

export default RefundPolicy;
