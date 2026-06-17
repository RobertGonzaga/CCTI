#include <iostream>
#include <vector>
using namespace std;

class Restaurante {
private:
  string nome;
  vector<string> cardapio;

public:
  Restaurante(string n) : nome(n){};

  string get_nome() { return nome; }

  void set_nome(string novo_nome) {
    if (novo_nome != "") {
      this->nome = novo_nome;
    } else {
      cout << "Nome inválido!" << endl;
    }
  }

  void adicionar_prato(string novo_prato) {
    bool contem_prato = false;
    for (int i = 0; i < cardapio.size(); i++) {
      if (novo_prato == cardapio[i]) {
        contem_prato = true;
        break;
      };
    };
    if (!contem_prato) {
      cardapio.push_back(novo_prato);
      cout << "Prato adicionado com sucesso" << endl;
    } else {
      cout << "Prato já existente!" << endl;
    }
  }

  void listar_cardapio() {
    cout << "***** CARDÁPIO: *****" << endl;
    for (int i = 0; i < cardapio.size(); i++) {
      cout << cardapio[i] << endl;
    }
  }

  void atender_cliente(string nome_cliente, string prato) {
    bool contem_prato = false;
    for (int i = 0; i < cardapio.size(); i++) {
      if (prato == cardapio[i]) {
        contem_prato = true;
        break;
      };
    };
    if (contem_prato) {
      cout << "Pedido confirmado caro(a) " << nome_cliente << endl;
      cout << prato << " já está sendo preparado." << endl;
    } else {
      cout << "Desculpe caro(a) " << nome_cliente << " não temos " << prato
           << " no cardápio." << endl;
    }
  }
};

int main() {

  Restaurante restaurante1("Sabor Caseiro");

  restaurante1.adicionar_prato("Macarronada");
  restaurante1.adicionar_prato("Bife à cavalo");
  restaurante1.adicionar_prato("Almondegas");
  restaurante1.listar_cardapio();

  restaurante1.atender_cliente("Robert", "Almondegas");
  restaurante1.atender_cliente("Erika", "Risoto");

  restaurante1.set_nome("Comidas Deliciosas");
  cout << restaurante1.get_nome() << endl;

  return 0;
}