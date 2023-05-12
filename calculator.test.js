import React from "react";
import { render, screen ,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";


describe('Calculator App', () => {
  beforeEach(() => {
    render(<App />);
    // <App/>
  });

  test('should set displayValue state to the clicked number', () => {
    const button = screen.getByTestId('button-5');
    fireEvent.click(button);
    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('5');
  });

  test('should add two numbers correctly', () => {
    const button = screen.getByTestId('button-5');
    fireEvent.click(button);

    const plus = screen.getByTestId('button+');
    fireEvent.click(plus);
    
    const button2 = screen.getByTestId('button-6');
    fireEvent.click(button2);

    const equal = screen.getByTestId('button=');
    fireEvent.click(equal);
    
    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('11');
  });

  test('should multiply two numbers correctly', () => {
    const button = screen.getByTestId('button-5');
    fireEvent.click(button);

    const multiply = screen.getByTestId('button*');
    fireEvent.click(multiply); 
    
    const button2 = screen.getByTestId('button-6');
    fireEvent.click(button2);

    const equal = screen.getByTestId('button=');
    fireEvent.click(equal);

    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('30');
  });

  test('should subtract two numbers correctly', () => {
    const button = screen.getByTestId('button-5');
    fireEvent.click(button);

    const minus = screen.getByTestId('button-');
    fireEvent.click(minus);
    
    const button2 = screen.getByTestId('button-6');
    fireEvent.click(button2);

    const equal = screen.getByTestId('button=');
    fireEvent.click(equal);
    
    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('-1');
  });

  test('should divide two numbers correctly', () => {
    const button = screen.getByTestId('button-2');
    fireEvent.click(button);
    
    const divide = screen.getByTestId('button/');
    fireEvent.click(divide); 
    
    const button2 = screen.getByTestId('button-2');
    fireEvent.click(button2);
    
    const equal = screen.getByTestId('button=');
    fireEvent.click(equal);

    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('1');
  });

  test('should clear display', () => {
    const button = screen.getByTestId('button-2');
    fireEvent.click(button);
  
    const AC = screen.getByText('AC');
    fireEvent.click(AC);

    const display = screen.getByTestId('display');
    expect(display.textContent).toEqual('');
  });


});
