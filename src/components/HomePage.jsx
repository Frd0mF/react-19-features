const HomePage = () => {
  return (
    <>
      <div className="my-5 text-xl">
        <ul>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">use() Hook Example</h3>
              <p>
                Use the `use()` hook to fetch some posts from the
                JSONPlaceholder API
              </p>
              <a className="link link-primary" href="/use-example-1">
                View
              </a>
            </div>
          </li>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">use(context) Example</h3>
              <p>Use the `use()` hook to apply a theme context</p>
              <a className="link link-primary" href="/use-example-context">
                View
              </a>
            </div>
          </li>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">Action Example</h3>
              <p>Use an action to submit a post form</p>
              <a className="link link-primary" href="/action-example-1">
                View
              </a>
            </div>
          </li>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">useFormStatus Example</h3>
              <p>
                Use the useFormStatus hook to get status of post form submission
              </p>
              <a className="link link-primary" href="/useformstatus-example">
                View
              </a>
            </div>
          </li>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">useFormState Example</h3>
              <p>
                Use the useFormState Hook to show specific messages for cart
                items
              </p>
              <a className="link link-primary" href="/useformstate-example">
                View
              </a>
            </div>
          </li>
          <li className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h3 className="card-title">useOptimistic Example</h3>
              <p>
                Use the useOptimistic hook to show a message before the server
                responds
              </p>
              <a className="link link-primary" href="/useoptimistic-example">
                View
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HomePage;
