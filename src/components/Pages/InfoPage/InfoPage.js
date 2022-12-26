import "./InfoPage.css";

const InfoPage = () => {
  return (
    <div>
      <h3>personal info</h3>
      <p>please provide your name, email address, and phone number.</p>
      <form>
        <div>
          <label htmlFor="name">name</label>
          <input id="name" type="text" placeholder="e.g Stephen King" />
        </div>
        <div>
          <label htmlFor="email">email address</label>
          <input
            id="email"
            type="text"
            placeholder="e.g stephenking@lorem.com"
          />
        </div>
        <div>
          <label htmlFor="phone">phone number</label>
          <input id="phone" type="number" placeholder="e.g +1 234 567 890" />
        </div>
      </form>
      <button>next step</button>
    </div>
  );
};

export default InfoPage;
