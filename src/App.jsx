import { useState } from 'react';
import {
  defaultRuleProcessorSpEL,
  formatQuery,
  QueryBuilder,
  ValueEditor,
} from 'react-querybuilder';
import { fields, operators } from './config';
import { ArithmeticValueEditor } from './Arithmetic';

import 'react-querybuilder/dist/query-builder.css';
import './App.css';

const ruleProcessor = (rule, opts) => {
  if (['+', '-', '*', '/'].includes(rule.operator)) {
    return `(${rule.field} ${rule.operator} ${rule.value.replaceAll(
      '|',
      ' ',
    )})`;
  }
  return defaultRuleProcessorSpEL(rule, opts);
};

const CustomValueEditor = (props) => {
  if (['+', '-', '*', '/'].includes(props.operator)) {
    return <ArithmeticValueEditor {...props} />;
  }
  return <ValueEditor {...props} />;
};

function App() {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [],
  });
  return (
    <section>
      <div>
        <QueryBuilder
          operators={operators}
          fields={fields}
          query={query}
          onQueryChange={setQuery}
          controlElements={{ valueEditor: CustomValueEditor }}
        />
      </div>
      <div>
        <code>{formatQuery(query, { format: 'spel', ruleProcessor })}</code>
      </div>
    </section>
  );
}

export default App;
