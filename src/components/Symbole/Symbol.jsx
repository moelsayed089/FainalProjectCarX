import { useState } from 'react';
import { UnknownSymbols } from '../../data';
import './Symbol.css'
export const Symbol = () => {
  const[searchTerm,setSearchTerm] =useState('');
  const handelSearch =(e)=>{
    const value = e.target.value
    setSearchTerm(value);
  }

  return (
    <>
      <div className="container col-xl-9">
        <div className="symbol-info mt-4 d-flex justify-content-center flex-column">
          <h2 className="py-3">
            What All the <span>Symbols on Your Car’s</span> <br />
            Dashboard Mean.
          </h2>
          <p className=" text-muted">
            We’ve all been there: You’re driving along, enjoying the views, and
            all of a sudden you hear a beep—you look down, and a symbol has
            appeared on your dashboard.You start to wonder what could be wrong
            with your car. Some symbols on your car’s dashboard are easier to
            figure out than others. However, it’s important to know exactly what
            these warning lights mean in case you need to pull over and call for
            help let's goo.
          </p>

          <div className="search-input col-lg-8">
            <input
              type="search"
              className=" form-control w-100 shadow-none mt-3"
              placeholder="search for Types of Car Symbols "
              value={searchTerm}
              onChange={handelSearch}
            />
          </div>
        </div>
        <div className="row mt-5">
          {UnknownSymbols.filter((item) => {
            return searchTerm.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchTerm.toLowerCase());
          }).map((item) => {
            return (
              <div key={item.id} className="col-xl-6 col-md-12 ">
                <div className="symbol-text ps-3  ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-25 mx-auto my-3 rounded-3 "
                  />
                  <h2 className="text- mb-2 ">{item.title}</h2>
                  <h5 className="text-warning">What It Means:</h5>
                  <p className="text-muted ">{item.decriptionOne}</p>

                  <h5 className=" text-warning"> What To Do:</h5>

                  <p className="text-muted ">{item.decriptiontwo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
