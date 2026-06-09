#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

int main() {
  string login, senha;
  int erro = 0;

  while (erro != 3) {
    try {
      cout << "LOGIN: ";
      cin >> login;
      cout << "SENHA: ";
      cin >> senha;

      if (login != "robertgonzaga" || senha != "1234") {
        throw runtime_error("Login ou senha inválidos, tente novamente");
      } else {
        cout << "Cadastro realizado com sucesso!" << endl;
        break;
      }

    } catch (const exception &e) {
      cout << e.what() << endl;
      erro++;
    }
  }

  if (erro == 3) {
    cout << "Limite de tentativas atingido" << endl;
    cout << "Acesso bloqueado!" << endl;
  }

  return 0;
}