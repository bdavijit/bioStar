import React from 'react';

const AddAProduct = () => {
      const AddProduct = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const image = event.target.image.value;
            const minimumOrder = event.target.minimumOrder.value;
            const price = parseInt(event.target.price.value);
            const quantity = parseInt(event.target.quantity.value);
            const sold = parseInt(event.target.sold.value);
            const supplier_name = event.target.supplier_name.value;
            const description = event.target.description.value;

            const ProductDate = {
                  name,
                  image,
                  minimumOrder,
                  price,
                  quantity,
                  sold,
                  supplier_name,
                  description,
            };

            fetch('http://localhost:5001/Product', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(ProductDate),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        alert('Product added successfully!!!');
                        event.target.reset();
                  });
      };
      return (
            <>
                  <form onSubmit={AddProduct}>
                        <input
                              type='text'
                              placeholder='name'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='name'
                        />
                        <input
                              type='text'
                              placeholder='image'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='image'
                        />
                        <input
                              type='number'
                              placeholder='minimumOrder'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='minimumOrder'
                        />
                        <input
                              type='number'
                              placeholder='price'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='price'
                        />
                        <input
                              type='number'
                              placeholder='quantity'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='quantity'
                        />
                        <input
                              type='number'
                              placeholder='sold'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='sold'
                        />
                        <input
                              type='text'
                              placeholder='supplier_name'
                              class='input input-bordered input-error w-full max-w-xs'
                              name='supplier_name'
                        />
                        <textarea
                              class='textarea textarea-error'
                              placeholder='description'
                              name='description'
                        ></textarea>
                        <br></br>

                        <button className='btn ' type='submit'>
                              Add Product
                        </button>
                  </form>
            </>
      );
};

export default AddAProduct;
