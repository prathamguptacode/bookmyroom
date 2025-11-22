import React from 'react'
import mystyle from './offer.module.css'
import Card from './card'

function Offer() {
  return (
    <div className={mystyle.offers}>
      <div className={mystyle.title}>Offers</div>
      <div className={mystyle.can}>Promotions, deals and special offers for you</div>
      <div className={mystyle.cardcan}>
        <Card title="hello world" con="world is very colorful"></Card>
        <Card title="hello world" con="world is very colorful"></Card>
        <Card title="hello world" con="world is very colorful"></Card>
      </div>
    </div>
  )
}

export default Offer
