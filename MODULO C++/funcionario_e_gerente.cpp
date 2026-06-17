#include <iostream>
using namespace std;

class Funcionario {
protected:
  string nome;
  double salario = 1500;

public:
  Funcionario(string n) : nome(n) {}

  virtual void mostrarSalario() {
    cout << "Funcionário: " << nome << "\nSalário: " << salario << endl;
  }
};

class Gerente : public Funcionario {
public:
  Gerente(string n) : Funcionario(n) {}
  void mostrarSalario() override {
    salario = salario * 1.2;
    cout << "Gerente: " << nome << "\nSalário: " << salario << endl;
  }
};

int main() {

  Funcionario f1("Welder");
  Gerente g1("Robert");

  f1.mostrarSalario();
  g1.mostrarSalario();

  return 0;
}