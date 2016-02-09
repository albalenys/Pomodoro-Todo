class Task < ActiveRecord::Base
  validates :text, presence: true

  has_many :pomodoros
  belongs_to :user
end