import React, { useState } from 'react';

function DetailsForm() {
  const [name, setName] = useState('david beckham');
  const [address, setAddress] = useState('5th avenue, newyork');
  const [phone, setPhone] = useState('7508398562');

  const loadRazorpayScript = () => {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  async function sendForm(e) {
    e.preventDefault();

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_s56G6TmXddzhP4',
      amount: 2500 * 100, // 2500 rupees in paisa
      currency: 'INR',
      name: 'Maxi Pvt Ltd',
      description: 'Test Payment',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: 'test@example.com',
        contact: phone,
      },
      notes: {
        address: address,
      },
      theme: {
        color: '#6366f1',
      },
    };

    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject);
    paymentObject.open();

    // Reset form fields
    setName('');
    setAddress('');
    setPhone('');
  }

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Enter your details</h2>
      <form onSubmit={sendForm}>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-2 w-full mb-2"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone no."
          className="border p-2 w-full mb-2"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit" className="bg-purple-600 text-white p-2 w-full rounded">
          Pay ₹2500
        </button>
      </form>
    </div>
  );
}

export default DetailsForm;
