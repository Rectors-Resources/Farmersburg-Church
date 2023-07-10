import "./events.css";

export default function Events() {
  return (
    <div>
      <table>
        <thead>
          <tr className="colored">
            <th>2023</th>
            <th>Event</th>
            <th>Time</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even">
            <td>5/6</td>
            <td>Easter Dinner</td>
            <td>5 P.M.</td>
            <td>Bring your own sides</td>
          </tr>
          <tr className="colored">
            <td>8/27</td>
            <td>Halloween Trunk or treat</td>
            <td>7 P.M.</td>
            <td>Remember to wear reflective clothing</td>
          </tr>
          <tr className="even">
            <td>12/2</td>
            <td>Christmas Dinner</td>
            <td>5 P.M.</td>
            <td>Gift exchange after dinner</td>
          </tr>
          <tr className="colored">
            <td>8/27</td>
            <td>Halloween Trunk or treat</td>
            <td>7 P.M.</td>
            <td>Remember to wear reflective clothing</td>
          </tr>
          <tr className="even">
            <td>8/27</td>
            <td>Halloween Trunk or treat</td>
            <td>7 P.M.</td>
            <td>Remember to wear reflective clothing</td>
          </tr>
          <tr className="colored">
            <td>8/27</td>
            <td>Halloween Trunk or treat</td>
            <td>7 P.M.</td>
            <td>Remember to wear reflective clothing</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>
        Dates and times subject to change due to weather or other circumstances.
      </h3>
      <br />
    </div>
  );
}
