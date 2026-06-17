#include <iostream>
using namespace std;

class Veiculo {
protected:
  string marca;

public:
  Veiculo(string m) : marca(m) {}

  virtual void resumo() { cout << marca << endl; }
};

class Carro : public Veiculo {
private:
  string modelo;

public:
  Carro(string m, string mdl) : Veiculo(m), modelo(mdl) {}

  void resumo() override { cout << marca << " " << modelo << endl; }
};

int main() {

  Veiculo v1("Mercedes");
  Carro c1("Fiat", "Toro");

  v1.resumo();
  c1.resumo();

  return 0;
}