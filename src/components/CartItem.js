import React from "react";

const CartItem = ({ item }) => {
  // destructure item

  const { id, title, image, price, amount } = item;

  return (
    <div>
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <img className="max-w-[80px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
