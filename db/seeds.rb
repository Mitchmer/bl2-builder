

10.times do
  user = User.create(
    email: Faker::Internet.unique.email,
    password: 'password'
  )
  2.times do
    user.builds.create(
      name: Faker::ElderScrolls.unique.dragon,
      character: Faker::ElderScrolls.first_name
    )
  end
end