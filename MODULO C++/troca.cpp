#include <iostream>
using namespace std;

void trocar(int *a, int *b) {
  *a = *a + *b;
  *b = *a - *b;
  *a = *a - *b;

  cout << *a << " " << *b << endl;
}

int main() {
  int a = 10;
  int b = 20;

  trocar(&a, &b);

  return 0;
}