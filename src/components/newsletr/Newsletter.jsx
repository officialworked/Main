import React from "react";
import "./Style.css";

const Newsletter = () => {
  return (
    <>
      <div className="subscribe">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Subscribe to this newsletter to get regular updates about interesting
          and secret upcoming NFT projects and events that are coming soon
          exclusively on our site. Become the First to Know about NFT launch,
          NFT Drops, Giveaways, Auctions.
        </p>
        <input className="input-field" type="email" placeholder="Email here" />
        <button className="btn-sub">Subscribe</button>
      </div>
    </>
  );
};

export default Newsletter;
