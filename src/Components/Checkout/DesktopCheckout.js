import Invoice from "./Invoice";

export default function DesktopCheckout() {
  return (
    <div
      id="body"
      className="w-full  flex    desktophide px-20 py-4  mx-auto  "
    >
      <div className="w-full h-full flex space-x-10 bg-tintwhite">
        {" "}
        <div className="w-[730px] h-full flex flex-col bg-white px-5  pt-8    pb-10 space-y-10">
          {" "}
          <p className="font-bold manropebh4 ">Checkout</p>
          <BillingDetails />
          <ShippingInfo />
          <PaymentDetails />
        </div>
        <div className="w-[350px] h-full  bg-white ">
          <Invoice />
        </div>
      </div>
    </div>
  );
}
function BillingDetails() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <p className="manropebh6 font-medium text-brown">BILLING DETAILS</p>
      <div className="flex w-full">
        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black font-bold ">Name</p>
          <input
            type="text"
            placeholder="John Doe"
            className="w-[309px] h-[81px] border-2 rounded-lg px-10"
          />
        </div>
        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black font-bold">Phone Number</p>
          <input
            type="text"
            placeholder="+(1) 431-323-3580"
            className="w-[309px] h-[81px] border-2 rounded-lg px-10"
          />
        </div>
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black font-bold">Email Address</p>
        <input
          type="text"
          placeholder="@gmail.com"
          className="w-[309px] h-[81px] border-2 rounded-lg px-10"
        />
      </div>
    </div>
  );
}
function ShippingInfo() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <p className="manropebh6 font-medium text-brown">SHIPPING INFO</p>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black font-bold">Your Address</p>
        <input
          type="text"
          className="w-full h-[81px] border-2 rounded-lg px-10"
        />
      </div>
      <div className="flex font-bold">
        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black">Zip Code</p>
          <input
            type="text"
            className="w-[309px] h-[81px] border-2 rounded-lg px-10"
          />
        </div>

        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black">City </p>
          <input
            type="text"
            className="w-[309px] h-[81px] border-2 rounded-lg px-10"
          />
        </div>
      </div>
      <div className="flex flex-col   space-y-2 w-full ">
        <p className="text-black font-bold">Country</p>
        <input
          type="text"
          className="w-[309px] h-[81px] border-2 rounded-lg  px-10"
        />
      </div>
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="flex flex-col w-full space-y-8">
      <p className="manropebh6 font-medium text-brown">PAYMENT DETAILS</p>
      <div className="flex w-full font-bold">
        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black">Name on Card</p>
          <input
            type="text"
            placeholder="John Doe"
            className="w-[309px] h-[81px] border-2 rounded-lg pl-2"
          />
        </div>
        <div className="flex flex-col   space-y-2 w-full ">
          <p className="text-black">Card Number</p>
          <input
            type="text"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            className="w-[309px] h-[81px] border-2 rounded-lg pl-2"
          />
        </div>
      </div>
      <div className="flex flex-col w-full font-bold">
        <div className="flex   w-full  justify-center   h-[50px]">
          <div className="w-1/2  flex  flex-col justify-center space-y-2 ">
            <p className="text-black">Cvv</p>
            <input
              type="text"
              className="w-[100px] h-[100px] border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/2  space-y-2 p">
            <p className="text-black">Expiry Details</p>

            <div className="flex">
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-[40px] h-[40px] border-2 rounded-lg pl-1"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-[40px] h-[40px] border-2 rounded-lg pl-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
