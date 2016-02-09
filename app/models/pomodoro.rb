class Pomodoro < ActiveRecord::Base
  validates :length, :numericality => { greater_than_or_equal_to: 10, less_than_or_equal_to: 59 }, presence: true

  belongs_to :task
  belongs_to :user
end