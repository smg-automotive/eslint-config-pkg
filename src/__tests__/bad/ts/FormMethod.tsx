const MissingMethodForm = () => (
  <form>
    <label htmlFor="email">Email</label>
    <input id="email" name="email" />
    <button type="submit">Submit</button>
  </form>
);

const GetMethodForm = () => (
  <form method="get">
    <label htmlFor="query">Search</label>
    <input id="query" name="query" />
    <button type="submit">Search</button>
  </form>
);

export { GetMethodForm, MissingMethodForm };
