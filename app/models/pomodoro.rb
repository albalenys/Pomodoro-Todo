class Pomodoro < ActiveRecord::Base
  validates :length, presence: true

  belongs_to :task
end