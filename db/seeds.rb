

10.times do
  u = User.create(
    email: Faker::Internet.unique.email,
    username: Faker::ElderScrolls.name,
    password: 'password'
  )
  2.times do
    Build.create(
      user_id: u.id,
      name: Faker::ElderScrolls.dragon,
      character: Faker::Hobbit.name,
      description: Faker::Hipster.paragraph
    )
  end
end