import React from 'react';

// TablesDemo presents a simple data table with proper structure.  The table
// includes a caption, a header row and column and uses the scope attribute
// on <th> cells to associate header information with data cells.

const TablesDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Data tables should include a
        caption, header rows and/or columns, and use <code>&lt;th scope="row"&gt;</code>
        and <code>scope="col"</code> to associate headers with data. Screen
        readers rely on this information to announce context when navigating
        cells.
      </p>
      <ul>
        <li>Use table header semantics (caption, thead, tbody).</li>
        <li>
          Navigate with a screen reader to hear row and column headers read for
          each cell.
        </li>
      </ul>
      <table>
        <caption>Nutritional values of common fruits</caption>
        <thead>
          <tr>
            <th scope="col">Fruit</th>
            <th scope="col">Serving size</th>
            <th scope="col">Calories</th>
            <th scope="col">Vitamin C (% DV)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Apple</th>
            <td>1 medium (182 g)</td>
            <td>95</td>
            <td>14%</td>
          </tr>
          <tr>
            <th scope="row">Banana</th>
            <td>1 medium (118 g)</td>
            <td>105</td>
            <td>17%</td>
          </tr>
          <tr>
            <th scope="row">Orange</th>
            <td>1 medium (131 g)</td>
            <td>62</td>
            <td>116%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablesDemo;