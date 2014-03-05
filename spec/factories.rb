FactoryGirl.define do
	factory :user do
		name					"Michael Hartl"
		email					"mike@example.com"
		password				"foobar"
		password_confirmation	"foobar"
	end	
end