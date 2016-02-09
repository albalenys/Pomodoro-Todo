class Pomodoro < ActiveRecord::Base
  validates :length, presence: true

  belongs_to :task
  belongs_to :user
end