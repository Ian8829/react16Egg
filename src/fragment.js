import React, { Component, Fragment } from 'react';

function Fruits() {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Orange</li>
      <li>Apple</li>
    </Fragment>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

export default class UseFragment extends Component {
  render() {
    return (
      <ul>
        <li>Peach</li>
        <li>Ananas</li>
        <Fruits />
        <Glossary
          items={[
            {
              id: 1,
              term: "HTML",
              description: "HTML AAA"
            },
            {
              id: 2,
              term: "CSS",
              description: "CSS BBB??"
            }
          ]}
        />
      </ul>
    );
  }
}