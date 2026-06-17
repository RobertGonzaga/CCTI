#include <iostream>
using namespace std;

class Pessoa {

protected:
  string nome;
  int idade;

public:
  Pessoa(string n, int i) : nome(n), idade(i) {}

  virtual void falar() { cout << nome << " está falando." << endl; }
};

class Professor : public Pessoa {
private:
  string disciplina;

public:
  Professor(string n, int i, string d) : Pessoa(n, i), disciplina(d) {}

  void falar() override {
    cout << "Professor " << nome << " está ensinando " << disciplina << "."
         << endl;
  }
};

class Aluno : public Pessoa {
private:
  int matricula;

public:
  Aluno(string n, int i, int m) : Pessoa(n, i), matricula(m) {}
  void falar() override {
    cout << "Aluno " << nome << " matricula: " << matricula
         << " está aprendendo." << endl;
  }
};

void fazerFalar(Pessoa *p) { p->falar(); }

int main() {

  // Pessoa p("Maria", 40);
  // Professor prof("Carlos", 60, "Matemática");
  // Aluno aluno("Ana", 20, 101);

  // p.falar();
  // prof.falar();
  // aluno.falar();

  Pessoa *p1 = new Pessoa("João", 30);
  Pessoa *p2 = new Professor("Ricardo", 35, "Física");
  Pessoa *p3 = new Aluno("Marina", 23, 202);

  fazerFalar(p1);
  fazerFalar(p2);
  fazerFalar(p3);

  delete p1;
  delete p2;
  delete p3;

  return 0;
}