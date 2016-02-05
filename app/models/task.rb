class Task < ActiveRecord::Base
  validates :text, presence: true

  has_many :timers
  belongs_to :user
end