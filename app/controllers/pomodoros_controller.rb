class PomodorosController < ApplicationController
  def new
    @pomodoro = Pomodoro.new
    @task = Task.find(params[:task_id])
  end

  def create
    pomodoro = Pomodoro.new(pomodoro_params)
    if pomodoro.save
      redirect_to task_pomodoro_path(pomodoro.task_id, pomodoro.id)
    else
      redirect_to new_task_pomodoro_path
    end
  end

  private

  def pomodoro_params
    params.require(:pomodoro).permit(:length, :task_id)
  end
end