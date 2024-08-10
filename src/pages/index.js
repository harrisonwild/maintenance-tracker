export default function Home() {
  return (
    <>
      <div class="container">
        <div class=" text-center mt-5 ">
          <h1>Dispenser Repair Form</h1>
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
                            <label for="form_account_name">
                              Account name *
                            </label>
                            <input
                              id="form_name"
                              type="text"
                              name="account-name"
                              class="form-control"
                              placeholder="Please enter the account name *"
                              required="required"
                              data-error="Account name is required."
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_contact_name">
                              Contact's name *
                            </label>
                            <input
                              id="form_contact_name"
                              type="text"
                              name="contact-name"
                              class="form-control"
                              placeholder="Please enter the contact's full name *"
                              required="required"
                              data-error="Contact's name is required."
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="account_address">
                              Account's Address *
                            </label>
                            <input
                              id="form_address"
                              type="text"
                              name="account-address"
                              class="form-control"
                              placeholder="Please enter the address *"
                              required="required"
                              data-error="Account's address is required."
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="account_hours">
                              Account's Hours of Operations *
                            </label>
                            <input
                              id="form_hours"
                              type="text"
                              name="account-hours"
                              class="form-control"
                              placeholder="Please enter the hours of operation *"
                              required="required"
                              data-error="Account's hours of operation is required."
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
                              <option>New Dispenser Install</option>
                              <option>Repair/Replace Existing Dispenser</option>
                              <option></option>
                              <option>
                                Other: Leave detailed message below
                              </option>
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
                              placeholder="Write helpful instructions here."
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
                            value="Submit Form"
                            style={{ padding: "10px", marginTop: "10px" }}
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
