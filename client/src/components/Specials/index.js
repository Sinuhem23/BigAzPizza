import React from 'react';
import './specials.css';
import { Link } from 'react-router-dom';

export default function SpecialsPG() {
  return (
    <div>
      <div>
        <p>working</p>
        <Link to='/'>
          <button className='btn btn-warning monthly-contact-btn mt-3 mb-3'>
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
