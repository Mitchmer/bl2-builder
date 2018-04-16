names = [
  "Axton",
  "Maya",
  "Gaige",
  "Krieg",
  "Zer0",
  "Salvador"
]

10.times do
  u = User.create(
    email: Faker::Internet.unique.email,
    username: Faker::Ancient.god,
    password: 'password'
  )
  2.times do
    Build.create(
      user_id: u.id,
      name: Faker::ElderScrolls.dragon,
      character: (names).sample,
      description: Faker::Hipster.paragraph
    )
  end
end