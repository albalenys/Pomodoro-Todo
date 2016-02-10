class Task < ActiveRecord::Base
  validates :text, presence: true
  validates_length_of :text, maximum: 50

  has_many :pomodoros
  belongs_to :user
end