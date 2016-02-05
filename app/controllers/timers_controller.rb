class TimersController < ApplicationController
  def new
    @timer = Timer.new
  end

  def create
    timer = Timer.new(timer_params)
    if timer.save
      redirect_to task_timer_path(timer)
    else
      redirect_to new_task_timer_path
    end
  end

  private

  def timer_params
    params.require(:timer).permit(:length)
  end
end