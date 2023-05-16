import { useState, useMemo } from "react";
import Command from './commands.jsx';
import './index.scss';

const TerminalInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form className="terminal-wrapper" onSubmit={handleSubmit}>
      <span className="terminal-prefix">sanju@kali:~/home$</span>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="input-area"
      />
    </form>
  );
};

const TerminalOutput = ({ outputs }) => {
  return (
    <div className="terminal-output">
      {outputs.map((output, index) => (
        <div key={index} className="terminal-output-line">
          {output?.terminalInput}<br></br>{output?.terminalOutput}
        </div>
      ))}
    </div>
  );
};

function Terminal() {
  const [outputs, setOutputs] = useState([]);

  const handleCommand = (command) => {
    if (command.toLowerCase() === 'cls' || command.toLowerCase() === 'clear' || outputs.length > 3) {
      setOutputs([]);
      return;
    }
    const newOutput = {
      terminalInput: `sanju@kali:~/home$ ${command}`,
      terminalOutput: <Command command={command} />
    };
    setOutputs([...outputs, newOutput]);
  };

  const memoizedTerminalOutput = useMemo(() => (
    <TerminalOutput outputs={outputs} />
  ), [outputs]);

  return (
    <div className="terminal-container">
      <div className="terminal-body">
        {memoizedTerminalOutput}
        <TerminalInput onSubmit={handleCommand} />
      </div>
    </div>
  );
}

export default Terminal;
