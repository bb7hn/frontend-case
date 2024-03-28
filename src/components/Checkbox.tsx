import classNames from 'classnames';
import React from 'react';

interface CheckboxProps {
  checked?:boolean
}
function Checkbox({ checked = false }:CheckboxProps) {
  return (
    <div className={classNames('w-4 h-4 border rounded-sm flex items-center justify-center', {
      'bg-blue-500': checked,
    })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60" d="M416 128L192 384l-96-96" />
      </svg>
    </div>
  );
}

export function CheckboxShimmer() {
  return (
    <div className="w-4 h-4 border rounded-sm flex items-center justify-center" />
  );
}

export default Checkbox;
