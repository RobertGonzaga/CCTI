#include <iostream>
using namespace std;

class Produto {
protected:
  string nome;
  double preco;

public:
  Produto(string n, double p) : nome(n), preco(p) {}

  virtual void mostrarDados() {
    cout << "Nome: " << nome << "\nPreço: " << preco << endl;
  }
};

class Livro : public Produto {
private:
  string autor;

public:
  Livro(string n, double p, string a) : Produto(n, p), autor(a) {}

  void mostrarDados() override {
    cout << "Nome: " << nome << "\nAutor: " << autor << "\nPreço: " << preco
         << endl;
  }
};

class Eletronico : public Produto {
private:
  string marca;

public:
  Eletronico(string n, double p, string m) : Produto(n, p), marca(m) {}

  void mostrarDados() override {
    cout << "Nome: " << nome << "\nMarca: " << marca << "\nPreço: " << preco
         << endl;
  }
};

int main() {

  Produto p1("Bola", 150.99);
  Produto p2("Chuteira", 566.99);
  Livro l1("Harry Potter", 200, "J.K. Rowling");
  Livro l2("O senhor dos anéis", 350, "Tolkien");
  Eletronico e1("Tablet", 3500.90, "Samsung");
  Eletronico e2("TV", 1899.99, "TCL");

  p1.mostrarDados();
  cout << endl;
  p2.mostrarDados();
  cout << endl;
  l1.mostrarDados();
  cout << endl;
  l2.mostrarDados();
  cout << endl;
  e1.mostrarDados();
  cout << endl;
  e2.mostrarDados();
  cout << endl;

  return 0;
}