result = []

while True:
    a = input("Write here: ").strip().capitalize()
    if a == "":
        break
    result.append(a)

print(result)