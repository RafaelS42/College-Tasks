#lista para teste nums = [70,	36,	2,	95,	70, 28,	74,	31,	12,	71, 78,	52,	37,	83,	89, 62,	89,	1,	66, 69]

nums= []
nums_inv = []
for x in range(20):
    nums.append(int(input(f'Digite o {x+1}° número :')))

for x in range((len(nums)-1), -1, -1):
    nums_inv.append(nums[x])

print('Eis os 20 números na ordem inversa : ')
print(nums_inv)