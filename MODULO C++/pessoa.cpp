#include <iostream>
using namespace std;

int main() {

  class Pessoa {
  private:
    string nome;
    int idade;

  public:
    Pessoa(string nome, int idade) {
      this->nome = nome;
      this->idade = idade;
    }
    void resumo() {
      cout << "Nome: " << nome << endl;
      cout << "Idade: " << idade << endl;
    }
  };

  Pessoa p1("Robert", 23);
  Pessoa p2("Welder", 22);

  p1.resumo();
  cout << endl;
  p2.resumo();

  return 0;
}