#include <iostream>
using namespace std;

int main() {

  class Animal {
  private:
    string especie;
    string som;

  public:
    Animal(string especie, string som) {
      this->especie = especie;
      this->som = som;
    }
    void emitir_som() { cout << this->som << endl; }
  };

  Animal a1("gato", "miaaauuuu");
  a1.emitir_som();

  return 0;
}