import javax.swing.*;
import java.awt.*;

public class Calculator {
    private JTextField num1Field, num2Field, resultField;
    private JButton addButton, subtractButton, multiplyButton, divideButton, clearButton;

    public Calculator() {
        JFrame frame = new JFrame("Simple Calculator");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new GridLayout(5, 2, 5, 5));

        num1Field = new JTextField();
        num2Field = new JTextField();
        resultField = new JTextField();
        resultField.setEditable(false);

        addButton = new JButton("+");
        subtractButton = new JButton("-");
        multiplyButton = new JButton("*");
        divideButton = new JButton("/");
        clearButton = new JButton("Clear");

        frame.add(new JLabel("Number 1:"));
        frame.add(num1Field);
        frame.add(new JLabel("Number 2:"));
        frame.add(num2Field);
        frame.add(addButton);
        frame.add(subtractButton);
        frame.add(multiplyButton);
        frame.add(divideButton);
        frame.add(new JLabel("Result:"));
        frame.add(resultField);

        // Action listeners for buttons
        addButton.addActionListener(e -> calculate('+'));
        subtractButton.addActionListener(e -> calculate('-'));
        multiplyButton.addActionListener(e -> calculate('*'));
        divideButton.addActionListener(e -> calculate('/'));
        clearButton.addActionListener(e -> clearFields());

        frame.setVisible(true);
    }

    private void calculate(char operator) {
        try {
            double num1 = Double.parseDouble(num1Field.getText());
            double num2 = Double.parseDouble(num2Field.getText());
            double result = 0;
            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 != 0 ? num1 / num2 : 0; break;
            }
            resultField.setText(String.valueOf(result));
        } catch (NumberFormatException ex) {
            resultField.setText("Error");
        }
    }

    private void clearFields() {
        num1Field.setText("");
        num2Field.setText("");
        resultField.setText("");
    }

    public static void main(String[] args) {
        new Calculator();
    }
}