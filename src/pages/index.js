export default function Home() {
  return (
    <>
      <h1>Dispenser Repair Form</h1>
      <div class="whole-form">
        <div class="customer-info">
          <form action="" method="get" class="dispenser-form">
            <div class="dispenser-form">
              <label for="account-name">Account Name: </label>
              <input
                type="text"
                name="account-name"
                id="account-name"
                required
              />
            </div>
            <div class="dispenser-form">
              <label for="contact-name">Contact Name: </label>
              <input
                type="text"
                name="contact-name"
                id="contact-name"
                required
              />
            </div>
            <div class="dispenser-form">
              <label for="address">Account Address: </label>
              <input type="text" name="address" id="address" required />
            </div>
            <div class="dispenser-form">
              <label for="special">Special Instructions </label>
              <input type="text" name="instructions" id="instructions" />
            </div>
            <div class="dispenser-form">
              <label for="hours">Hours of Operation </label>
              <input type="text" name="hours" id="hours" required />
            </div>
          </form>
          <form>
            <div class="dispenser-info">
              <div class="dispenser-form">
                <label for="brand">Dispenser Brand </label>
                <input type="text" name="brand" id="brand" required />
              </div>
              <div class="dispenser-form">
                <label for="dispenser-type">Dispenser Type </label>
                <input type="text" name="dispenser-type" id="dispenser-type" />
              </div>
              <div class="dispenser-form">
                <label for="colors">Color (SIG only)</label>
                <input
                  type="text"
                  name="dispenser-color"
                  id="dispenser-color"
                />
              </div>
              <div class="dispenser-form">
                <label for="dispenser-qty">Quantity </label>
                <input type="text" name="quantity" id="quantity" />
              </div>
              <div class="dispenser-form">
                <label for="problem">Problem Found </label>
                <input type="text" name="problem" id="problem" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
