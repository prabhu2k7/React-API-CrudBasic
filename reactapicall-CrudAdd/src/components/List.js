import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (

      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>CardNumber</th>
              <th>Balance</th>
              <th>Limit</th>
           
            </tr>
          </thead>
      {repos.map((repo) => {
        return (


   <tr>
            
            <td>{repo.name}</td>
            <td>{repo.cardNumber}</td>
            <td>£2500</td>
            <td>{repo.limitVal}</td>
           
        </tr>
        

        
        );
      })}
      </table>
   
  );
};
export default List;
