class TimersController < ApplicationController
  def new
    @timer = Timer.new
  end

  def create
  end
end