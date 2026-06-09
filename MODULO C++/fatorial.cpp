#include <iostream>

using namespace std;

int main() {
  int n;

  cout << "Digite um numero: ";
  cin >> n;

  if (n < 0) {
    cout << "Numero invalido." << endl;
    return 1;
  }

  cout << n << "! = ";

  // Caso especial para 0 e 1
  if (n == 0 || n == 1) {
    cout << "1 = 1" << endl;
    return 0;
  }

  unsigned long long fatorial = 1;

  for (int i = n; i >= 1; --i) {
    fatorial *= i;

    cout << i;
    if (i > 1) {
      cout << " * ";
    }
  }

  cout << " = " << fatorial << endl;

  return 0;
}