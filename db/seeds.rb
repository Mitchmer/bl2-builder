# names = [
#   "Axton",
#   "Maya",
#   "Gaige",
#   "Krieg",
#   "Zer0",
#   "Salvador"
# ]

guns = [
  { name: 'Pimpernel', image: 'https://i.imgur.com/DM8Sr16.png' },
  { name: 'Norfleet', image: 'https://i.imgur.com/zRfcdcT.png' },
  { name: 'Unkempt Harold', image: 'https://i.imgur.com/DXLuTxj.png' },
  { name: 'Grog Nozzle', image: 'https://i.imgur.com/jYNVzsx.png' },
  { name: 'Orge', image: 'https://i.imgur.com/CRpjphW.png' },
  { name: 'Slagga', image: 'https://i.imgur.com/6USl09D.png' },
  { name: 'Lady Fist', image: 'https://i.imgur.com/ZLRUn4A.png' },
  { name: 'Rubi', image: 'https://i.imgur.com/533qQ2h.png' }
]

# 10.times do
#   u = User.create(
#     email: Faker::Internet.unique.email,
#     username: Faker::Ancient.god,
#     password: 'password'
#   )
#   2.times do
#     Build.create(
#       user_id: u.id,
#       name: Faker::ElderScrolls.dragon,
#       character: (names).sample,
#       description: Faker::Hipster.paragraph
#     )
#   end
# end

guns.each do |gun|
  Gun.create(
    name: gun[:name],
    image: gun[:image]
  )
end