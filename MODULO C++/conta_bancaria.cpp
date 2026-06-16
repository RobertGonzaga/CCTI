#include <iostream>
using namespace std;

int main() {

  class ContaBancaria {
  private:
    string titular;
    double saldo;

  public:
    ContaBancaria(string titular, double saldo) {
      this->titular = titular;
      this->saldo = saldo;
    }
    void sacar(double quantia) {
      if (quantia > this->saldo) {
        cout << "Saldo insuficiente!" << endl;
      } else {
        this->saldo -= quantia;
        cout << "Saque de " << quantia << " efetuado com sucesso!" << endl;
      }
    }
    void depositar(double quantia) {
      if (quantia < 0) {
        cout << "Valor de depósito inválido!" << endl;
      } else {
        this->saldo += quantia;
        cout << "Depósito de " << quantia << " realizado com sucesso!" << endl;
      }
    }
    void exibirSaldo() { cout << "Saldo atual: " << this->saldo << endl; }
  };

  ContaBancaria c1("Robert", 125.50);
  c1.sacar(200);
  cout << endl;
  c1.sacar(10.25);
  cout << endl;
  c1.depositar(-300.55);
  cout << endl;
  c1.depositar(500);
  cout << endl;
  c1.exibirSaldo();

  return 0;
}