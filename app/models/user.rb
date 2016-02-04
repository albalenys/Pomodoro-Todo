class User < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  validates_uniqueness_of :email

  has_many :items
end