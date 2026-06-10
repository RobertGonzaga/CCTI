#include <chrono>
#include <iostream>

using namespace std;
using namespace std::chrono;

int main() {
  const long long N = 500000000; // 500 milhões de iterações
  volatile double soma = 0;

  auto inicio = high_resolution_clock::now();

  for (long long i = 1; i <= N; i++) {
    soma += i * 0.000001;
  }

  auto fim = high_resolution_clock::now();

  auto tempo = duration_cast<milliseconds>(fim - inicio).count();

  cout << "Resultado: " << soma << endl;
  cout << "Tempo: " << tempo << " ms" << endl;

  return 0;
}