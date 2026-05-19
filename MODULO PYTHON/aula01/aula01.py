# a = [1, 2, 3]
# b = a.copy()
# b.append(4)

# print(f"Este é o valor do a: {a}")
# print(f"Este é o valor do b: {b}")

nome_coletado = str(input("Digite seu nome: "))
# print("Bem vindo de volta", nome_coletado)

if nome_coletado.isdigit():
  print("Isso não é um nome valido!")
else:
  print(f"Bem vindo de volta {nome_coletado}")