import React from 'react';
import CustomerInfo from '../components/CustomerInfo';

export default [
        {
          id: '0',
          message: 'Hi! Are you looking to buy travel insurance?',
          trigger: 'start',
        },
        {
          id: 'start',
          options: [
            { value: 'yes', label: 'Yes', trigger: '1' },
            { value: 'no', label: 'No', trigger: '2' },
          ],
        },
        {
          id: '1',
          message: 'Great, can I get your first name?',
          trigger: 'first_name',
        },
        {
          id: '2',
          message: 'In that case, let me tell you more about travel insurance',
          trigger: 'info',
        },
        {
          id: 'first_name',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Nice to meet you, {previousValue}. What is your last name?',
          trigger: 'last_name',
        },
        {
          id: 'last_name',
          user: true,
          trigger: '4',
        },
        {
          id: '4',
          message: 'What is your DOB? (Format: MM/DD/YYYY)',
          trigger: 'birthday',
        },
        {
          id: 'birthday',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          message: 'What is the first line of your street address?',
          trigger: 'address_1',
        },
        {
          id: 'address_1',
          user: true,
          trigger: '6',
        },
        {
          id: '6',
          message: 'Do you have an apartment/condo number, that is, another line of your address?',
          trigger: 'apartment-option',
        },
        {
          id: 'apartment-option',
          options: [
            { value: 'yes', label: 'Yes', trigger: '7' },
            { value: 'no', label: 'No', trigger: '8' },
          ],
        },
        {
          id: '7',
          message: 'Okay, can you give that to me?',
          trigger: 'address_2',
        },
        {
          id: 'address_2',
          user: true,
          trigger: '8',
        },
        {
          id: '8',
          message: 'What city do you live in?',
          trigger: 'city',
        },
        {
          id: 'city',
          user: true,
          trigger: '9',
        },
        {
          id: '9',
          message: 'What state do you live in?',
          trigger: 'state',
        },
        {
          id: 'state',
          user: true,
          trigger: '10',
        },
        {
          id: '10',
          message: 'What is your zipcode?',
          trigger: 'zipcode',
        },
        {
          id: 'zipcode',
          user: true,
          trigger: '11',
        },
        {
          id: '11',
          message: 'What is your phone number?',
          trigger: 'phone_number',
        },
        {
          id: 'phone_number',
          user: true,
          trigger: '12',
        },
        {
          id: '12',
          message: 'What is your email address?',
          trigger: 'email_address',
        },
        {
          id: 'email_address',
          user: true,
          trigger: '13',
        },
        {
          id: '13',
          message: 'Hang on, just a couple more questions about your trip!',
          trigger: '14',
        },
        {
          id: '14',
          message: 'Where are you planning to go?',
          trigger: 'destination',
        },
        {
          id: 'destination',
          user: true,
          trigger: '15'
        },
        {
          id: '15',
          message: 'When are you going to depart? (Format: MM/DD/YYYY)',
          trigger: 'depart_date',
        },
        {
          id: 'depart_date',
          user: true,
          trigger: '16',
        },
        {
          id: '16',
          message: 'When are you planning to return? (Format: MM/DD/YYYY)',
          trigger: 'return_date',
        },
        {
          id: 'return_date',
          user: true,
          trigger: '17',
        },
        {
          id: '17',
          message: 'What type of plan do you want to get?',
          trigger: 'plan_type',
        },
        {
          id: 'plan_type',
          options: [
            { value: 'single_trip', label: 'Single Trip', trigger: '18' },
            { value: 'annual', label: 'Annual', trigger: '18' },
            { value: 'renters', label: 'Renters', trigger: '18' },
          ],
        },
        {
          id: '18',
          message: 'Finally, choose the plan you want to get',
          trigger: 'plan_name',
        },
        {
          id: 'plan_name',
          options: [
            { value: 'air_ticket', label: 'Air Ticket Protector', trigger: '19' },
            { value: 'classic_plus', label: 'Classic Plus', trigger: '19' },
            { value: 'premier', label: 'Premier', trigger: '19' },
            { value: 'premier_annual', label: 'Premier Annual', trigger: '19' },
            { value: 'basic_annual', label: 'Basic Annual', trigger: '19' },
            { value: 'medical_only', label: 'Medical Only Annual', trigger: '19' },
            { value: 'renters_collision', label: 'Renter\'s Collision', trigger: '19' },
          ],
        },
        {
          id: '19',
          message: 'Thanks for submitting your information! We\'ll calculate your plan immediately. Just hold on tight!',
          trigger: 'api_call',
        },
        {
          id: 'api_call',
          component: <CustomerInfo />,
          asMessage: true,
          trigger: '20',
        },
        {
          id: 'info',
          message: 'Not to be pessimistic, but let\'s say you end up getting food poisoning all of a sudden. You could pay a couple thousand dollars ' +
          'for your medical bills or let Solartis take care of it. Or what if your layover got cancelled, and you can\'t make it to your destination. We all know ' 
          + 'that airlines don\'t provide the best support for these situtations, so you might have to drop another couple hundred to get a last-minute ' +
          'ticket to get to the right place or just let us pay for it. Whatever the emergency is, Solartis will have you covered. Are you ready to buy insurance?',
          trigger: 'final-options',
        },
        {
          id: 'final-options',
          options: [
            { value: 'yes', label: 'Yes', trigger: '1' },
            { value: 'no', label: 'No', trigger: 'end' },
          ],
        },
        {
          id: '20',
          message: 'We hope you have a lovely trip!',
          trigger: 'end',
        },
        {
          id: 'end',
          message: 'Thanks for taking the time to meet SolarBot',
          end: true
        }
    ];