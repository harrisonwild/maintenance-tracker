// export default function Home() {
//   return (
//     <>
//       <h1>Dispenser Repair Form</h1>
//       <div class="whole-form">
//         <div class="customer-info">
//           <form action="" method="get" class="dispenser-form">
//             <div class="dispenser-form">
//               <label for="account-name">Account Name: </label>
//               <input
//                 type="text"
//                 name="account-name"
//                 id="account-name"
//                 required
//               />
//             </div>
//             <div class="dispenser-form">
//               <label for="contact-name">Contact Name: </label>
//               <input
//                 type="text"
//                 name="contact-name"
//                 id="contact-name"
//                 required
//               />
//             </div>
//             <div class="dispenser-form">
//               <label for="address">Account Address: </label>
//               <input type="text" name="address" id="address" required />
//             </div>
//             <div class="dispenser-form">
//               <label for="special">Special Instructions </label>
//               <input type="text" name="instructions" id="instructions" />
//             </div>
//             <div class="dispenser-form">
//               <label for="hours">Hours of Operation </label>
//               <input type="text" name="hours" id="hours" required />
//             </div>
//           </form>
//           <form>
//             <div class="dispenser-info">
//               <div class="dispenser-form">
//                 <label for="brand">Dispenser Brand </label>
//                 <input type="text" name="brand" id="brand" required />
//               </div>
//               <div class="dispenser-form">
//                 <label for="dispenser-type">Dispenser Type </label>
//                 <input type="text" name="dispenser-type" id="dispenser-type" />
//               </div>
//               <div class="dispenser-form">
//                 <label for="colors">Color (SIG only)</label>
//                 <input
//                   type="text"
//                   name="dispenser-color"
//                   id="dispenser-color"
//                 />
//               </div>
//               <div class="dispenser-form">
//                 <label for="dispenser-qty">Quantity </label>
//                 <input type="text" name="quantity" id="quantity" />
//               </div>
//               <div class="dispenser-form">
//                 <label for="problem">Problem Found </label>
//                 <input type="text" name="problem" id="problem" />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// ----------------------

export default function Home() {
  return (
    <>
      <div class="container">
        <div class=" text-center mt-5 ">
          <h1>Bootstrap Contact Form</h1>
        </div>
        <div class="row ">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                <div class="container">
                  <form id="contact-form" role="form">
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_name">Firstname *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              class="form-control"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_lastname">Lastname *</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              class="form-control"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              class="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_need">
                              Please specify your need *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              class="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected disabled>
                                --Select Your Issue--
                              </option>
                              <option>Request Invoice for order</option>
                              <option>Request order status</option>
                              <option>Haven't received cashback yet</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              class="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <input
                            type="submit"
                            class="btn btn-success btn-send  pt-2 btn-block
                            "
                            value="Send Message"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- /.8 --> */}
          </div>
          {/* <!-- /.row--> */}
        </div>
      </div>
    </>
  );
}
