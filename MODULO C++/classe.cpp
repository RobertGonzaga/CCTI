// Aula: 15/06
// Prof. Erika
// Aluno: Robert
#include <iostream>
using namespace std;

int main() {

  class Televisao {
  private:
    string modelo;
    string marca;
    int tamanho;

  public:
    Televisao(string modelo, string marca, int tamanho) {
      this->modelo = modelo;
      this->marca = marca;
      this->tamanho = tamanho;
    }
    int volume = 50;
    void ligar() {
      cout << marca << endl;
      cout << "Televisor " << this->modelo << " Ligado!" << endl;
    }
    void desligar() {
      cout << marca << endl;
      cout << "Televisor " << this->modelo << " Desligado!" << endl;
    }
    void aumentarVolume() {
      this->volume += 5;
      cout << "Volume: " << this->volume << endl;
    }
    void diminuirVolume() {
      this->volume -= 5;
      cout << "Volume: " << this->volume << endl;
    }
  };
  Televisao t1("Crystal UHD", "Samsung", 50);
  t1.ligar();
  cout << endl;
  t1.aumentarVolume();
  cout << endl;
  t1.diminuirVolume();
  cout << endl;
  t1.desligar();
  return 0;
}