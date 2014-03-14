namespace :db do
	desc "Fill database with sample data"
	task populate: :environment do
		User.create!(name: "Example User",
			email: "dawalsh@gmail.com",
			password: "foobar",
			password_confirmation: "foobar",
			admin: true)
		99.times do |n|
			name = Phil.name
			email = "example-#{n+1}@railstutorial.org"
			password = "password"
			User.create!(name: name,
				email: email,
				password: password,
				password_confirmation: password)
		end
		users = User.all(limit: 12)
		50.times do
			content = Phil.words 8
			users.each { |user| user.microposts.create!(content: content) }
		end
	end
end